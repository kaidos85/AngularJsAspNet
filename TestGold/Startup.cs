using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TestGold.Startup))]
namespace TestGold
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
