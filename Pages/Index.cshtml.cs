using System.Collections;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Data.Sqlite;
using Tetris.Data;

namespace Tetris.Pages;

public class IndexModel : PageModel
{
	private readonly ILogger<IndexModel> _logger;
	public IndexModel(ILogger<IndexModel> logger)
	{
		_logger = logger;
	}

	public string name { get; set; }

	public void OnGet()
	{
		SQL.Instance.GetDB();
	}

	public void OnPost()
	{
		var name = Request.Form["name"];
		var score = Request.Form["score"];


		SQL.Instance.InsertDB(name, int.Parse(score));
	}
}
