using MatrixMultiply2.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace MatrixMultiply2
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            

            // API web routing
            config.EnableCors(new AccessPolicyCors());

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "Default",
                routeTemplate: "{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
