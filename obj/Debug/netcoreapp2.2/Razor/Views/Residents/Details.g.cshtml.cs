#pragma checksum "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "94e0c5ba700c5dce99b03d43e51dab4df114ca93"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Residents_Details), @"mvc.1.0.view", @"/Views/Residents/Details.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Residents/Details.cshtml", typeof(AspNetCore.Views_Residents_Details))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "G:\FinalProject\SuiteRole\Views\_ViewImports.cshtml"
using GroupProject3;

#line default
#line hidden
#line 2 "G:\FinalProject\SuiteRole\Views\_ViewImports.cshtml"
using GroupProject3.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"94e0c5ba700c5dce99b03d43e51dab4df114ca93", @"/Views/Residents/Details.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fe2c5e07e357036fba2b5d33c2d0377fb1cc0650", @"/Views/_ViewImports.cshtml")]
    public class Views_Residents_Details : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<GroupProject3.Models.Resident>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Edit", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Index", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(38, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
  
    ViewData["Title"] = "Details";

#line default
#line hidden
            BeginContext(83, 131, true);
            WriteLiteral("\r\n<h1>Details</h1>\r\n\r\n<div>\r\n    <h4>Resident</h4>\r\n    <hr />\r\n    <dl class=\"row\">\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(215, 45, false);
#line 14 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.AcctOwner));

#line default
#line hidden
            EndContext();
            BeginContext(260, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(324, 41, false);
#line 17 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.AcctOwner));

#line default
#line hidden
            EndContext();
            BeginContext(365, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(428, 43, false);
#line 20 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.UnitNum));

#line default
#line hidden
            EndContext();
            BeginContext(471, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(535, 39, false);
#line 23 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.UnitNum));

#line default
#line hidden
            EndContext();
            BeginContext(574, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(637, 45, false);
#line 26 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.LastName1));

#line default
#line hidden
            EndContext();
            BeginContext(682, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(746, 41, false);
#line 29 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.LastName1));

#line default
#line hidden
            EndContext();
            BeginContext(787, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(850, 46, false);
#line 32 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.FirstName1));

#line default
#line hidden
            EndContext();
            BeginContext(896, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(960, 42, false);
#line 35 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.FirstName1));

#line default
#line hidden
            EndContext();
            BeginContext(1002, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(1065, 46, false);
#line 38 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.StorageNum));

#line default
#line hidden
            EndContext();
            BeginContext(1111, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(1175, 42, false);
#line 41 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.StorageNum));

#line default
#line hidden
            EndContext();
            BeginContext(1217, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(1280, 47, false);
#line 44 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.ContactNum1));

#line default
#line hidden
            EndContext();
            BeginContext(1327, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(1391, 43, false);
#line 47 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.ContactNum1));

#line default
#line hidden
            EndContext();
            BeginContext(1434, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(1497, 47, false);
#line 50 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.ContactNum2));

#line default
#line hidden
            EndContext();
            BeginContext(1544, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(1608, 43, false);
#line 53 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.ContactNum2));

#line default
#line hidden
            EndContext();
            BeginContext(1651, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(1714, 47, false);
#line 56 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.ContactNum3));

#line default
#line hidden
            EndContext();
            BeginContext(1761, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(1825, 43, false);
#line 59 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.ContactNum3));

#line default
#line hidden
            EndContext();
            BeginContext(1868, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(1931, 42, false);
#line 62 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.Email1));

#line default
#line hidden
            EndContext();
            BeginContext(1973, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(2037, 38, false);
#line 65 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.Email1));

#line default
#line hidden
            EndContext();
            BeginContext(2075, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(2138, 42, false);
#line 68 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.Email2));

#line default
#line hidden
            EndContext();
            BeginContext(2180, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(2244, 38, false);
#line 71 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.Email2));

#line default
#line hidden
            EndContext();
            BeginContext(2282, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(2345, 42, false);
#line 74 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.Email3));

#line default
#line hidden
            EndContext();
            BeginContext(2387, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(2451, 38, false);
#line 77 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.Email3));

#line default
#line hidden
            EndContext();
            BeginContext(2489, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(2552, 42, false);
#line 80 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.Email4));

#line default
#line hidden
            EndContext();
            BeginContext(2594, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(2658, 38, false);
#line 83 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.Email4));

#line default
#line hidden
            EndContext();
            BeginContext(2696, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(2759, 48, false);
#line 86 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.ParkingSpot1));

#line default
#line hidden
            EndContext();
            BeginContext(2807, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(2871, 44, false);
#line 89 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.ParkingSpot1));

#line default
#line hidden
            EndContext();
            BeginContext(2915, 62, true);
            WriteLiteral("\r\n        </dd>\r\n        <dt class = \"col-sm-2\">\r\n            ");
            EndContext();
            BeginContext(2978, 48, false);
#line 92 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayNameFor(model => model.ParkingSpot2));

#line default
#line hidden
            EndContext();
            BeginContext(3026, 63, true);
            WriteLiteral("\r\n        </dt>\r\n        <dd class = \"col-sm-10\">\r\n            ");
            EndContext();
            BeginContext(3090, 44, false);
#line 95 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
       Write(Html.DisplayFor(model => model.ParkingSpot2));

#line default
#line hidden
            EndContext();
            BeginContext(3134, 47, true);
            WriteLiteral("\r\n        </dd>\r\n    </dl>\r\n</div>\r\n<div>\r\n    ");
            EndContext();
            BeginContext(3181, 54, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "94e0c5ba700c5dce99b03d43e51dab4df114ca9315392", async() => {
                BeginContext(3227, 4, true);
                WriteLiteral("Edit");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            if (__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues == null)
            {
                throw new InvalidOperationException(InvalidTagHelperIndexerAssignment("asp-route-id", "Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper", "RouteValues"));
            }
            BeginWriteTagHelperAttribute();
#line 100 "G:\FinalProject\SuiteRole\Views\Residents\Details.cshtml"
                           WriteLiteral(Model.ID);

#line default
#line hidden
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues["id"] = __tagHelperStringValueBuffer;
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-route-id", __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues["id"], global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(3235, 8, true);
            WriteLiteral(" |\r\n    ");
            EndContext();
            BeginContext(3243, 38, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "94e0c5ba700c5dce99b03d43e51dab4df114ca9317692", async() => {
                BeginContext(3265, 12, true);
                WriteLiteral("Back to List");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(3281, 10, true);
            WriteLiteral("\r\n</div>\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<GroupProject3.Models.Resident> Html { get; private set; }
    }
}
#pragma warning restore 1591
