<#--
This file allows you to override and define new FreeMarker variables.
-->

<#assign mostrar_tutorial = getterUtil.getBoolean(themeDisplay.getThemeSetting("mostrar-tutorial")) /> 
<#assign referencia_tutorial = getterUtil.getString(themeDisplay.getThemeSetting("referencia-tutorial")) />  


<#assign mostrar_contactanos = getterUtil.getBoolean(themeDisplay.getThemeSetting("mostrar-contactanos")) /> 
<#assign referencia_contactanos = getterUtil.getString(themeDisplay.getThemeSetting("referencia-contactanos")) />  

<#assign mostrar_chat = getterUtil.getBoolean(themeDisplay.getThemeSetting("mostrar-chat")) /> 
<#assign referencia_chat = getterUtil.getString(themeDisplay.getThemeSetting("referencia-chat")) /> 
             
<#assign mostrar_preguntas = getterUtil.getBoolean(themeDisplay.getThemeSetting("mostrar-preguntas")) /> 
<#assign referencia_preguntas = getterUtil.getString(themeDisplay.getThemeSetting("referencia-preguntas")) />        

<#assign variable = ["registro", "bar", "baz"] /> 
<#assign x = 0>

