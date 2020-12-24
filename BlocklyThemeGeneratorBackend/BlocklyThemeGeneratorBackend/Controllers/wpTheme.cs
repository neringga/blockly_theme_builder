using Microsoft.AspNetCore.Mvc;

namespace BlocklyThemeGeneratorBackend.Controllers
{
    public class wpTheme : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}