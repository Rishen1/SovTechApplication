using Microsoft.AspNetCore.Mvc;
using SovTechAPI1.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SovTechAngular.Controllers
{
    public class Chuck_Norris_API_Controller : ControllerBase
    {

        private readonly IChuck_Noris _chuck_Noris;

        public Chuck_Norris_API_Controller(IChuck_Noris chuck_)
        {
            _chuck_Noris = chuck_;
        }

        [Microsoft.AspNetCore.Mvc.HttpGet("/chuck/categories")]
        public ActionResult GetJokes()
        {
            return Ok(_chuck_Noris.JokeCategories());

        }


    }
}

