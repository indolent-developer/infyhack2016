using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(dotz.Startup))]
namespace dotz
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
