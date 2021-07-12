using Microsoft.AspNetCore.Mvc;
using SovTechAPI1.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SovTechAngular.Controllers
{
    public class StarWarsController : Controller
    {
        private readonly IStarWars _StarWars;

        public StarWarsController(IStarWars starWars)
        {
            _StarWars = starWars;
        }

        [Microsoft.AspNetCore.Mvc.HttpGet("/swapi/people")]
       
        public ActionResult GetStarWarPeople()
        {
            return Ok(_StarWars.StarWarsPeople());
        }
    }
}
