<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>${the_title}</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />

	<@liferay_util["include"] page=top_head_include />
</head>

<body class="${css_class}">

<@liferay_ui["quick-access"] contentId="#main-content" />

<@liferay_util["include"] page=body_top_include />

<@liferay.control_menu />


	<header>


		<#if has_navigation && is_setup_complete>
			<#include "${full_templates_path}/navigation.ftl" />
		</#if>
	</header>

	<section id="content" style="margin:0px; padding:0px;">
		<!--<h1 class="hide-accessible">${the_title}</h1>

-->

		<#if selectable>
			<@liferay_util["include"] page=content_include />
		<#else>
			${portletDisplay.recycle()}

			${portletDisplay.setTitle(the_title)}

			<@liferay_theme["wrap-portlet"] page="portlet.ftl">
				<@liferay_util["include"] page=content_include />
			</@>
		</#if>
	</section>




<@liferay_util["include"] page=body_bottom_include />

<@liferay_util["include"] page=bottom_include />

<!-- inject:js -->
<!-- endinject -->

<script src="${javascript_folder}/ahorroSolidario.js" type="text/javascript"></script>

 <script src="${javascript_folder}/bootstrap-datepicker.js" type="text/javascript"></script>

 <script src="${javascript_folder}/comprobante-registro-form.js" type="text/javascript"></script>

	<script src="${javascript_folder}/formulario.js" type="text/javascript"></script>

	<script src="${javascript_folder}/funciones.js" type="text/javascript"></script>

	<script src="${javascript_folder}/imprimeCurp-form.js" type="text/javascript"></script>


	<script src="${javascript_folder}/jquery.fileDownload.js" type="text/javascript"></script>

	 <script src="${javascript_folder}/jquery.min.js" type="text/javascript"></script>

	 <script src="${javascript_folder}/jquery-ui.js" type="text/javascript"></script>

		<script src="${javascript_folder}/localizaAfore-form.js" type="text/javascript"></script>

		<script src="${javascript_folder}/main.js" type="text/javascript"></script>

		<script src="${javascript_folder}/presolicitud.js" type="text/javascript"></script>

		<script src="${javascript_folder}/scripts.js" type="text/javascript"></script>

		<script src="${javascript_folder}/slider.js" type="text/javascript"></script>

		<script src="${javascript_folder}/constancia/validarPersona.js" type="text/javascript"></script>


</body>

</html>
