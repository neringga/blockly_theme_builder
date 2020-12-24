using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using BlocklyThemeGeneratorBackend.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace BlocklyThemeGeneratorBackend.Controllers
{
    [AllowAnonymous]
    [Route("api/wordpressTheme")]
    [ApiController]
    [EnableCors("MyPolicy")]
    public class WordpressTheme : Controller
    {
        private IWordpressThemeHelper _wordpressThemeHelper;
        
        public WordpressTheme()
        {
            _wordpressThemeHelper = new WordpressThemeHelper();
        }
        
        // GET api/wordpressTheme
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] {"value1", "value2"};
        }

        // POST api/wordpressTheme
        [HttpPost]
        public HttpResponseMessage Post([FromBody] Request request)
        {
            _wordpressThemeHelper.UpdateThemeAsync(request.Title, request.Content);
            
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }

    public class Request
    {
        public string Title { get; set; }
        public string Content { get; set; }
    }
}