using System.Collections;
using Microsoft.Data.Sqlite;

namespace Tetris.Data;

public class SQL
{
	//private static 인스턴스 객체
	private static readonly Lazy<SQL> _instance = new Lazy<SQL>(() => new SQL());
	//public static 의 객체반환 함수
	public static SQL Instance { get { return _instance.Value; } }

	private SQL()
	{
		Connect = new SqliteConnection("Data Source=score.db");
		Connect.Open();
	}

	public SqliteConnection Connect = new();
	public ArrayList arr_score;
	public ArrayList arr_name;

	public void CreateTable()
	{
		using (var transaction = Connect.BeginTransaction())
		{
			var command = Connect.CreateCommand();
			command.CommandText = "create table rank(name varchar(10), score int)";
			try
			{
				command.ExecuteNonQuery();
			}
			catch
			{

			}
			transaction.Commit();
		}
	}

	public void GetDB()
	{
		arr_score = new();
		arr_name = new();

		using (var transaction = Connect.BeginTransaction())
		{
			var command = Connect.CreateCommand();
			int index = 0;

			command.CommandText = "select * from rank order by score desc";
			using (var reader = command.ExecuteReader())
			{
				// Console.WriteLine(reader.GetString(0));
				while (reader.Read())
				{
					if (index > 10) break;
					else
					{
						var name = reader.GetString(0);
						var score = reader.GetString(1);

						arr_score.Add(score);
						arr_name.Add(name);
					}
				}
			}
		}
	}

	public void InsertDB(string name, int score)
	{
		using (var transaction = Connect.BeginTransaction())
		{
			var command = Connect.CreateCommand();

			command.CommandText = "insert into rank(name, score) values ($name,$score)";

			var nameParameter = command.CreateParameter();
			nameParameter.ParameterName = "$name";
			nameParameter.Value = name;

			var scoreParameter = command.CreateParameter();
			scoreParameter.ParameterName = "$score";
			scoreParameter.Value = score;

			command.Parameters.Add(nameParameter);
			command.Parameters.Add(scoreParameter);

			command.ExecuteNonQuery();

			transaction.Commit();
		}
	}
}