using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.AspNetCore.Mvc;

namespace recipe_ai.app.web.Infrastructure.Routing;

/// <summary>
/// Convention: Controller name (PascalCase) -> route template snake_case + ".ctr"
/// e.g. SysUserController => sys_user.ctr, DashboardController => dashboard.ctr
/// Does not override if controller has [Route(...)] attribute.
/// </summary>
public class ControllerCtrRouteConvention : IControllerModelConvention
{
    public void Apply(ControllerModel controller)
    {
        var routeAttr = controller.Attributes.OfType<RouteAttribute>().FirstOrDefault();
        if (routeAttr != null && !string.IsNullOrEmpty(routeAttr.Template))
            return;

        var name = controller.ControllerName;
        if (string.IsNullOrEmpty(name))
            return;

        var snakeCase = PascalToSnakeCase(name);
        var template = snakeCase + ".ctr";
        controller.Selectors.Clear();
        controller.Selectors.Add(new SelectorModel
        {
            AttributeRouteModel = new AttributeRouteModel { Template = template }
        });
    }

    private static string PascalToSnakeCase(string value)
    {
        if (string.IsNullOrEmpty(value)) return value;
        var result = new System.Text.StringBuilder();
        for (var i = 0; i < value.Length; i++)
        {
            var c = value[i];
            if (char.IsUpper(c))
            {
                if (i > 0) result.Append('_');
                result.Append(char.ToLowerInvariant(c));
            }
            else
                result.Append(c);
        }
        return result.ToString();
    }
}
