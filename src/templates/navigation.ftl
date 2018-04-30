
<#include init />

<div id="topmenu">
		<div class="container">
			<ul class="nav navbar-nav navbar-inverse navbar-right">

                <#if mostrar_tutorial>
				<li><a href="#" data-toggle="modal" data-target="#tutorialModal"
						data-theVideo="${referencia_tutorial}">
						<i class="fa fa-video-camera fa-fw"></i>&nbsp; Tutorial</a></li>
             </#if>

            <#if mostrar_contactanos>
				<li><a href="${referencia_contactanos}">
						<i class="fa fa-envelope fa-fw"></i>&nbsp;Cont&aacute;ctanos</a></li>
                </#if>

                 <#if mostrar_chat>
				<li><a href="${referencia_chat}"
						target="popup"
						onClick="window.open(this.href, this.target, 'width=640,height=540'); return false;">
						<div class="fa prechat">
							<span class="chatsar">&nbsp;</span>
						</div> Chat del SAR </a></li>

                     </#if>

                    <#if mostrar_preguntas>
				<li><a href="${referencia_preguntas}">
						<i class="fa fa-question-circle fa-fw"></i>Preguntas frecuentes</a></li>
                    </#if>

			</ul>
		</div>
	</div>












<div id="mainmenu" class="navbar navbar-default navbar-static-top">

<div class="container">

            <div class="navbar-header">
				    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					    <span class="icon-bar"></span>
					    <span class="icon-bar"></span>
					    <span class="icon-bar"></span>
				    </button>
				    <a class="navbar-brand" href="${site_default_url}">
					    <img src="${site_logo}" width="100%" height="auto" alt="e-SAR"
						    title="e-SAR" class="logo1" />&nbsp;
					    <img src="${images_folder}/logow.png" width="100%" height="auto" alt="e-SAR"
						    title="e-SAR" class="logo2" /></a>
						</div>

    <div class="navbar-collapse collapse ">

	<ul class="nav navbar-nav navbar-right">
		<#list nav_items as nav_item>
			<#assign
				nav_item_attr_has_popup = ""
				nav_item_attr_selected = ""
				nav_item_css_class = ""
				nav_item_layout = nav_item.getLayout()
			/>

			<#if nav_item.isSelected()>
				<#assign
					nav_item_attr_has_popup = "aria-haspopup='true'"
					nav_item_attr_selected = "aria-selected='true'"
					nav_item_css_class = "selected"
				/>
			</#if>

			<li>
                
				<a href="${nav_item.getURL()}" ${nav_item.getTarget()}>
<#assign x ++>

				<span>${nav_item.getName()}</span>
<#if x == 2>
   de registro
<#elseif x == 3>
   tu AFORE
<#elseif x == 4>
 tu ahorro
<#elseif x == 5>
 registro o traspaso
<#elseif x == 6>
 código CURP
<#elseif x == 7>
   Solidario
<#elseif x == 8>
 retiro 65 y más
<#elseif x == 9>
SIEFORE
<#elseif x == 10>
del Traspaso
</#if>


            </a>
    
  


			</li>

		</#list>




                            <li class="navsup">
							<a href="#" data-toggle="modal" data-target="#tutorialModal"
								data-theVideo="${referencia_tutorial}">Tutorial</a></li>


						<li class="navsup">
							<a href="${referencia_contactanos}">Cont&aacute;ctanos</a></li>


						<li class="navsup">
			<a href="${referencia_chat}"
								target="_blank">Chat del SAR</a></li>


						<li class="navsup">
							<a href="${referencia_preguntas}">Preguntas frecuentes</a></li>



	            </ul>
			</div>
	</div>
</div>
