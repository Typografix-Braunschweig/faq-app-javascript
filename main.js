import "./style.css";
import { faqAccordion } from "./functions.js";

document.querySelector("#app").innerHTML = `
  <div class="page-template page-template-elementor_header_footer page page-id-4309 logged-in elementor-default elementor-template-full-width elementor-kit-5 elementor-page elementor-page-4309 dialog-body dialog-buttons-body dialog-container dialog-buttons-container e--ua-blink e--ua-chrome e--ua-webkit" data-elementor-device-mode="desktop">



		<div class="elementor-element elementor-element-a7ba009 e-con-full e-flex e-con" data-id="a7ba009" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
				<div class="elementor-element elementor-element-b42b04a elementor-widget elementor-widget-heading" data-id="b42b04a" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">FAQ</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-baa9837 elementor-widget elementor-widget-toggle" data-id="baa9837" data-element_type="widget" id="faq2-2" data-widget_type="toggle.default">
				<div class="elementor-widget-container">
			<style>.elementor-toggle{text-align:left}.elementor-toggle .elementor-tab-title{font-weight:700;line-height:1;margin:0;padding:15px;border-bottom:1px solid #d5d8dc;cursor:pointer;outline:none}.elementor-toggle .elementor-tab-title .elementor-toggle-icon{display:inline-block;width:1em}.elementor-toggle .elementor-tab-title .elementor-toggle-icon svg{-webkit-margin-start:-5px;margin-inline-start:-5px;width:1em;height:1em}.elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-right{float:right;text-align:right}.elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-left{float:left;text-align:left}.elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-closed{display:block}.elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-opened{display:none}.elementor-toggle .elementor-tab-title.elementor-active{border-bottom:none}.elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-closed{display:none}.elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-opened{display:block}.elementor-toggle .elementor-tab-content{padding:15px;border-bottom:1px solid #d5d8dc;display:none}@media (max-width:460px){.elementor-toggle .elementor-tab-title{padding:12px}.elementor-toggle .elementor-tab-content{padding:12px 10px}}.e-con-inner>.elementor-widget-toggle,.e-con>.elementor-widget-toggle{width:var(--container-widget-width);--flex-grow:var(--container-widget-flex-grow)}</style>		<div class="">
							<div class="elementor-toggle-item">
					<h3 id="elementor-tab-title-1951" class="elementor-tab-title elementor-active" data-tab="1" role="button" aria-controls="elementor-tab-content-1951" aria-expanded="true" tabindex="0" aria-selected="true">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed" style="display: none;"><i class="fas fa-plus"></i></span>
								<span class="elementor-toggle-icon-opened" style="display: block;"><i class="elementor-toggle-icon-opened fas fa-minus"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Wer betreut mein Kind?</a>
					</h3>

					<div id="elementor-tab-content-1951" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="1" role="region" aria-labelledby="elementor-tab-title-1951" style="display: block;"><p>Jedem LiBERO-Kind steht eine qualifizierte Betreuungsperson zur Seite – darunter sind Heilerziehungspfleger, Krankenschwestern und auch Studenten der Sozialpädagogik</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h3 id="elementor-tab-title-1952" class="elementor-tab-title elementor-active" data-tab="2" role="button" aria-controls="elementor-tab-content-1952" aria-expanded="true" tabindex="0" aria-selected="true">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed" style="display: block;"><i class="fas fa-plus"></i></span>
								<span class="elementor-toggle-icon-opened" style="display: none;"><i class="elementor-toggle-icon-opened fas fa-minus"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Umschalter #2</a>
					</h3>

					<div id="elementor-tab-content-1952" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="2" role="region" aria-labelledby="elementor-tab-title-1952" style="display: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
				</div>
							<div class="elementor-toggle-item">
					<h3 id="elementor-tab-title-1953" class="elementor-tab-title elementor-active" data-tab="3" role="button" aria-controls="elementor-tab-content-1953" aria-expanded="true" tabindex="0" aria-selected="true">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed" style="display: block;"><i class="fas fa-plus"></i></span>
								<span class="elementor-toggle-icon-opened" style="display: none;"><i class="elementor-toggle-icon-opened fas fa-minus"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Titel umschalten</a>
					</h3>

					<div id="elementor-tab-content-1953" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="3" role="region" aria-labelledby="elementor-tab-title-1953" style="display: none;">Inhalt umschalten</div>
				</div>
							<div class="elementor-toggle-item">
					<h3 id="elementor-tab-title-1954" class="elementor-tab-title" data-tab="4" role="button" aria-controls="elementor-tab-content-1954" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed" style="display: block;"><i class="fas fa-plus"></i></span>
								<span class="elementor-toggle-icon-opened" style="display: none;"><i class="elementor-toggle-icon-opened fas fa-minus"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Titel umschalten</a>
					</h3>

					<div id="elementor-tab-content-1954" class="elementor-tab-content elementor-clearfix" data-tab="4" role="region" aria-labelledby="elementor-tab-title-1954" style="display: none;">Inhalt umschalten</div>
				</div>
										<script type="application/ld+json">{"@context":"https:\/\/schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Wer betreut mein Kind?","acceptedAnswer":{"@type":"Answer","text":"<p>Jedem LiBERO-Kind steht eine qualifizierte Betreuungsperson zur Seite \u2013 darunter sind Heilerziehungspfleger, Krankenschwestern und auch Studenten der Sozialp\u00e4dagogik<\/p>"}},{"@type":"Question","name":"Umschalter #2","acceptedAnswer":{"@type":"Answer","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}},{"@type":"Question","name":"Titel umschalten","acceptedAnswer":{"@type":"Answer","text":"Inhalt umschalten"}},{"@type":"Question","name":"Titel umschalten","acceptedAnswer":{"@type":"Answer","text":"Inhalt umschalten"}}]}</script>
					</div>
				</div>
				</div>
				</div>
		



			<script>
    const mainContainer = document.querySelector("#faq2-2");
    mainContainer.firstElementChild.lastElementChild.classList.remove("elementor-toggle");
    
     const allPluses = mainContainer.querySelectorAll("span.elementor-toggle-icon-closed");

   const allPlusesArray = Array.from(allPluses);
   console.log(allPlusesArray);
   const allMinuses = mainContainer.querySelectorAll("span.elementor-toggle-icon-opened");
   const allMinusesArray = Array.from(allMinuses);
   
   const allBeschreibungen = document.querySelectorAll("#faq2-2 .elementor-tab-content");
   const allBeschreibungenArray = Array.from(allBeschreibungen);

     allPlusesArray
         .forEach((element) => {
            element.style.display = "block";
         });

       allMinusesArray
         .forEach((element) => {
            element.style.display = "none";
         });

      allBeschreibungenArray
         .forEach((element) => {
            element.style.display="none";
         });

   let isOpen = false;
   let targetBeschreibung;
    let targetPlus;
   let targetMinus;

   const toggleDisplay = (targetToToggleBeschreibung, targetToTogglePlus, targetToToggleMinus) => {
	 
	      allPlusesArray
         .filter((plus) => plus !== targetToTogglePlus)
         .forEach((element) => {
            element.style.display = "block";
         });

       allMinusesArray
         .filter((minus) => minus != targetToToggleMinus)
         .forEach((element) => {
            element.style.display = "none";
         });

      allBeschreibungenArray
         .filter((text) => text != targetToToggleBeschreibung)
         .forEach((element) => {
            element.style.display="none";
         });

    targetToToggleBeschreibung.style.display = isOpen ? "block" : "none";
    targetToTogglePlus.style.display = isOpen ? "none" : "block";
    targetToToggleMinus.style.display = isOpen ? "block" : "none";
   };

   const getTarget = (e) => {
      if (e.target.tagName.toLowerCase() === "a") {
         targetBeschreibung = e.target.parentElement.nextElementSibling;
        targetPlus = e.target.parentElement.firstElementChild.firstElementChild;
         targetMinus = e.target.parentElement.firstElementChild.lastElementChild;
      } else if (e.target.tagName.toLowerCase() === "i") {
         targetBeschreibung = e.target.parentElement.parentElement.parentElement.nextElementSibling;
       targetPlus = e.target.parentElement;
        targetMinus = e.target.parentElement.nextElementSibling;
      } else {
         targetBeschreibung = e.target.nextElementSibling;
        targetPlus = e.target.childNodes[1].firstElementChild;
         targetMinus = e.target.childNodes[1].lastElementChild;
      };
      
    if(!!(targetPlus.style.display==="none") && !!(targetBeschreibung.style.display==="block"))  {
         isOpen = false;
      } else { 
         isOpen = true;
      };
     
    toggleDisplay(targetBeschreibung, targetPlus, targetMinus);
        };

   mainContainer.addEventListener("click", getTarget);

</script>		</div>
				</div>
				</div>
				</div>
							</div>
				
						</div>
		
		
		<script type="text/template" id="tmpl-elementor-templates-modal__header">
	<div class="elementor-templates-modal__header__logo-area"></div>
	<div class="elementor-templates-modal__header__menu-area"></div>
	<div class="elementor-templates-modal__header__items-area">
		<# if ( closeType ) { #>
			<div class="elementor-templates-modal__header__close elementor-templates-modal__header__close--{{{ closeType }}} elementor-templates-modal__header__item">
				<# if ( 'skip' === closeType ) { #>
				<span>Überspringen</span>
				<# } #>
				<i class="eicon-close" aria-hidden="true"></i>
				<span class="elementor-screen-only">Schließen</span>
			</div>
		<# } #>
		<div id="elementor-template-library-header-tools"></div>
	</div>
</script>

<script type="text/template" id="tmpl-elementor-templates-modal__header__logo">
	<span class="elementor-templates-modal__header__logo__icon-wrapper e-logo-wrapper">
		<i class="eicon-elementor"></i>
	</span>
	<span class="elementor-templates-modal__header__logo__title">{{{ title }}}</span>
</script>
<script type="text/template" id="tmpl-elementor-finder">
	<div id="elementor-finder__search">
		<i class="eicon-search" aria-hidden="true"></i>
		<input id="elementor-finder__search__input" placeholder="Lostippen, um alles in Elementor zu finden" autocomplete="off">
	</div>
	<div id="elementor-finder__content"></div>
</script>

<script type="text/template" id="tmpl-elementor-finder-results-container">
	<div id="elementor-finder__no-results">Keine Ergebnisse gefunden</div>
	<div id="elementor-finder__results"></div>
</script>

<script type="text/template" id="tmpl-elementor-finder__results__category">
	<div class="elementor-finder__results__category__title">{{{ title }}}</div>
	<div class="elementor-finder__results__category__items"></div>
</script>

<script type="text/template" id="tmpl-elementor-finder__results__item">
	<a href="{{ url }}" class="elementor-finder__results__item__link">
		<div class="elementor-finder__results__item__icon">
			<i class="eicon-{{{ icon }}}" aria-hidden="true"></i>
		</div>
		<div class="elementor-finder__results__item__title">{{{ title }}}</div>
		<# if ( description ) { #>
			<div class="elementor-finder__results__item__description">- {{{ description }}}</div>
		<# } #>

		<# if ( lock ) { #>
		<div class="elementor-finder__results__item__badge"><i class="{{{ lock.badge.icon }}}"></i>{{ lock.badge.text }}</div>
		<# } #>
	</a>
	<# if ( actions.length ) { #>
		<div class="elementor-finder__results__item__actions">
		<# jQuery.each( actions, function() { #>
			<a class="elementor-finder__results__item__action elementor-finder__results__item__action--{{ this.name }}" href="{{ this.url }}" target="_blank">
				<i class="eicon-{{{ this.icon }}}"></i>
			</a>
		<# } ); #>
		</div>
	<# } #>
</script>
<link rel="stylesheet" id="e-animations-css" href="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.14.1" media="all">
<script id="elementor-web-cli-js-before">
var elementorWebCliConfig = {"isDebug":false,"urls":{"rest":"https:\/\/dev-typografix.de\/probearbeiten\/wp-json\/","assets":"https:\/\/dev-typografix.de\/probearbeiten\/wp-content\/plugins\/elementor\/assets\/"},"nonce":"f00ebcb9df","version":"3.14.1"};
var elementorWebCliConfig = {"isDebug":false,"urls":{"rest":"https:\/\/dev-typografix.de\/probearbeiten\/wp-json\/","assets":"https:\/\/dev-typografix.de\/probearbeiten\/wp-content\/plugins\/elementor\/assets\/"},"nonce":"f00ebcb9df","version":"3.14.1"};
</script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/js/web-cli.min.js?ver=3.14.1" id="elementor-web-cli-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2" id="wp-polyfill-inert-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.11" id="regenerator-runtime-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0" id="wp-polyfill-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/dist/vendor/react.min.js?ver=18.2.0" id="react-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/dist/vendor/react-dom.min.js?ver=18.2.0" id="react-dom-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/dist/hooks.min.js?ver=4169d3cf8e8d95a3d6d5" id="wp-hooks-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/dist/i18n.min.js?ver=9e794f35a71bb98672ae" id="wp-i18n-js"></script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor-pro/assets/js/notes/notes.min.js?ver=3.14.1" id="elementor-pro-notes-js"></script>
<script id="elementor-pro-notes-app-initiator-js-before">
var elementorNotesConfig = {"route":{"title":"Urlaubsbetreuung","url":"\/probearbeiten\/?p=4309","note_url_pattern":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-pro-notes-proxy&note-id={{NOTE_ID}}","post_id":4309,"is_elementor_library":false},"direction":"ltr","is_debug":false,"current_user_can":{"create":true,"create_users":true,"edit_users":true},"urls":{"admin_url_create_user":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/user-new.php","admin_url_edit_user":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/user-edit.php","avatar_defaults":{"24":"https:\/\/secure.gravatar.com\/avatar\/?s=24&d=mm&r=g","48":"https:\/\/secure.gravatar.com\/avatar\/?s=48&d=mm&r=g","96":"https:\/\/secure.gravatar.com\/avatar\/?s=96&d=mm&r=g"},"help_notes_features":"https:\/\/go.elementor.com\/app-notes"}};
</script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor-pro/assets/js/notes/notes-app-initiator.min.js?ver=3.14.1" id="elementor-pro-notes-app-initiator-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js?ver=1.0.0" id="hello-theme-frontend-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2" id="jquery-ui-core-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.2" id="jquery-ui-mouse-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/jquery/ui/draggable.min.js?ver=1.13.2" id="jquery-ui-draggable-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/underscore.min.js?ver=1.13.4" id="underscore-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/backbone.min.js?ver=1.4.1" id="backbone-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/lib/backbone/backbone.marionette.min.js?ver=2.4.5.e1" id="backbone-marionette-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/lib/backbone/backbone.radio.min.js?ver=1.0.4" id="backbone-radio-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/js/common-modules.min.js?ver=3.14.1" id="elementor-common-modules-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js?ver=4.9.0" id="elementor-dialog-js"></script>
<script id="wp-api-request-js-extra">
var wpApiSettings = {"root":"https:\/\/dev-typografix.de\/probearbeiten\/wp-json\/","nonce":"f00ebcb9df","versionString":"wp\/v2\/"};
</script>
<script src="https://dev-typografix.de/probearbeiten/wp-includes/js/api-request.min.js?ver=6.2.2" id="wp-api-request-js"></script>
<script id="elementor-dev-tools-js-before">
var elementorDevToolsConfig = {"isDebug":false,"urls":{"assets":"https:\/\/dev-typografix.de\/probearbeiten\/wp-content\/plugins\/elementor\/assets\/"},"deprecation":{"soft_notices":[],"soft_version_count":4,"hard_version_count":8,"current_version":"3.14.1"}};
var elementorDevToolsConfig = {"isDebug":false,"urls":{"assets":"https:\/\/dev-typografix.de\/probearbeiten\/wp-content\/plugins\/elementor\/assets\/"},"deprecation":{"soft_notices":[],"soft_version_count":4,"hard_version_count":8,"current_version":"3.14.1"}};
var elementorDevToolsConfig = {"isDebug":false,"urls":{"assets":"https:\/\/dev-typografix.de\/probearbeiten\/wp-content\/plugins\/elementor\/assets\/"},"deprecation":{"soft_notices":[],"soft_version_count":4,"hard_version_count":8,"current_version":"3.14.1"}};
</script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/js/dev-tools.min.js?ver=3.14.1" id="elementor-dev-tools-js"></script>
<script id="elementor-common-js-translations">
( function( domain, translations ) {
	var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
	localeData[""].domain = domain;
	wp.i18n.setLocaleData( localeData, domain );
} )( "elementor", {"translation-revision-date":"2023-07-08 10:07:56+0000","generator":"GlotPress\/4.0.0-alpha.4","domain":"messages","locale_data":{"messages":{"":{"domain":"messages","plural-forms":"nplurals=2; plural=n != 1;","lang":"de"},"Enable and Import":["Aktivieren und importieren"],"The file exceeds the maximum upload size for this site.":["Die Datei \u00fcberschreitet die maximale Uploadgr\u00f6\u00dfe f\u00fcr diese Website."],"Uploading...":["Hochladen\u2026"],"Enable Unfiltered File Uploads":["Ungefilterte Dateiuploads aktivieren"],"Unable to connect":["Keine Verbindung m\u00f6glich"],"Before you enable unfiltered files upload, note that such files include a security risk. Elementor does run a process to remove possible malicious code, but there is still risk involved when using such files.":["Bevor du das ungefilterte Hochladen von Dateien aktivierst, beachte, dass diese Art von Dateien ein Sicherheitsrisiko bergen. Elementor f\u00fchrt zwar einen Prozess zur Entfernung von m\u00f6glichem b\u00f6sartigem Code aus, aber es besteht dennoch ein Risiko bei der Verwendung solcher Dateien."],"Finder":["Finder"],"Enable":["Aktivieren"],"Cancel":["Abbruch"]}},"comment":{"reference":"assets\/js\/common.js"}} );
</script>
<script id="elementor-common-js-before">
var elementorCommonConfig = {"version":"3.14.1","isRTL":false,"isDebug":false,"isElementorDebug":false,"activeModules":["ajax","finder","connect","event-tracker"],"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"a11y_improvements":true,"additional_custom_breakpoints":true,"container":true,"e_swiper_latest":true,"theme_builder_v2":true,"hello-theme-header-footer":true,"landing-pages":true,"nested-elements":true,"page-transitions":true,"notes":true,"loop":true,"form-submissions":true,"e_scroll_snap":true},"urls":{"assets":"https:\/\/dev-typografix.de\/probearbeiten\/wp-content\/plugins\/elementor\/assets\/","rest":"https:\/\/dev-typografix.de\/probearbeiten\/wp-json\/"},"filesUpload":{"unfilteredFiles":true},"library_connect":{"is_connected":true,"subscription_plans":[{"label":null,"promotion_url":null,"color":null},{"label":"Pro","promotion_url":"https:\/\/elementor.com\/pro\/?utm_source=template-library&utm_medium=wp-dash&utm_campaign=gopro","color":"#92003B"}],"base_access_level":0,"current_access_level":0},"ajax":{"url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin-ajax.php","nonce":"2ad397a5e6"},"finder":{"data":{"edit":{"title":"Bearbeiten","dynamic":true,"name":"edit"},"general":{"title":"Generell","dynamic":false,"items":{"saved-templates":{"title":"Gespeicherte Templates","icon":"library-save","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?post_type=elementor_library&tabs_group=library","keywords":["template","section","page","library"]},"system-info":{"title":"System Info","icon":"info-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-system-info","keywords":["system","info","environment","elementor"]},"role-manager":{"title":"Benutzerrollen verwalten","icon":"person","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-role-manager","keywords":["role","manager","user","elementor"]},"knowledge-base":{"title":"Wissensdatenbank","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=go_knowledge_base_site","keywords":["help","knowledge","docs","elementor"]},"theme-builder":{"title":"Theme Builder","icon":"library-save","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-app&ver=3.14.1#\/site-editor","keywords":["template","header","footer","single","archive","search","404","library"]},"kit-library":{"title":"Kit Bibliothek","icon":"kit-parts","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-app&ver=3.14.1#\/kit-library","keywords":["kit library","kit","library","site parts","parts","assets","templates"]},"popups":{"title":"Popups","icon":"library-save","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?post_type=elementor_library&tabs_group=popup&elementor_library_type=popup","keywords":["template","popup","library"]}},"name":"general"},"create":{"title":"Erstellen","dynamic":false,"items":{"page":{"title":"Neue Seitenvorlage hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&template_type=page&_wpnonce=c5fd55ee4c","keywords":["Neue Seitenvorlage hinzuf\u00fcgen","post","page","template","new","create"]},"section":{"title":"Abschnitt hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=c5fd55ee4c&template_type=section","keywords":["Abschnitt hinzuf\u00fcgen","post","page","template","new","create"]},"container":{"title":"Container hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&template_type=stack&_wpnonce=c5fd55ee4c","keywords":["Container hinzuf\u00fcgen","post","page","template","new","create"]},"wp-post":{"title":"Beitrag hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=post&template_type=wp-post&_wpnonce=c5fd55ee4c","keywords":["Beitrag hinzuf\u00fcgen","post","page","template","new","create"]},"wp-page":{"title":"Seite hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=page&template_type=wp-page&_wpnonce=c5fd55ee4c","keywords":["Seite hinzuf\u00fcgen","post","page","template","new","create"]},"landing-page":{"title":"Landingpage hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=e-landing-page&template_type=landing-page&_wpnonce=c5fd55ee4c#library","keywords":["Landingpage hinzuf\u00fcgen","post","page","template","new","create"]},"popup":{"title":"Popup hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=c5fd55ee4c&template_type=popup","keywords":["Popup hinzuf\u00fcgen","post","page","template","new","create"]},"header":{"title":"Kopfzeile hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=c5fd55ee4c&template_type=header","keywords":["Kopfzeile hinzuf\u00fcgen","post","page","template","new","create"]},"footer":{"title":"Fu\u00dfzeile hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=c5fd55ee4c&template_type=footer","keywords":["Fu\u00dfzeile hinzuf\u00fcgen","post","page","template","new","create"]},"single":{"title":"Single hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=c5fd55ee4c&template_type=single","keywords":["Single hinzuf\u00fcgen","post","page","template","new","create"]},"single-post":{"title":"Single Post hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=c5fd55ee4c&template_type=single-post","keywords":["Single Post hinzuf\u00fcgen","post","page","template","new","create"]},"single-page":{"title":"Single Page hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=c5fd55ee4c&template_type=single-page&_elementor_template_sub_type=page","keywords":["Single Page hinzuf\u00fcgen","post","page","template","new","create"]},"archive":{"title":"Archiv hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=c5fd55ee4c&template_type=archive","keywords":["Archiv hinzuf\u00fcgen","post","page","template","new","create"]},"search-results":{"title":"Suchergebnisse hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=c5fd55ee4c&template_type=search-results&_elementor_template_sub_type=search","keywords":["Suchergebnisse hinzuf\u00fcgen","post","page","template","new","create"]},"error-404":{"title":"Error 404 hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=c5fd55ee4c&template_type=error-404&_elementor_template_sub_type=not_found404","keywords":["Error 404 hinzuf\u00fcgen","post","page","template","new","create"]},"code_snippet":{"title":"Custom Code hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/post-new.php?post_type=elementor_snippet","keywords":["Custom Code hinzuf\u00fcgen","post","page","template","new","create"]},"loop-item":{"title":"Loop Item hinzuf\u00fcgen","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=c5fd55ee4c&template_type=loop-item","keywords":["Loop Item hinzuf\u00fcgen","post","page","template","new","create"]},"theme-template":{"title":"Add New Theme Template","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-app&ver=3.14.1#\/site-editor\/add-new","keywords":["template","theme","new","create"]},"loop-template":{"title":"Add New Loop Template","icon":"plus-circle-o","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?post_type=elementor_library&tabs_group=theme&elementor_library_type=loop-item#add_new","keywords":["template","theme","new","create","loop","dynamic","listing","archive","repeater"]}},"name":"create"},"site":{"title":"Website","dynamic":false,"items":{"homepage":{"title":"Homepage","url":"https:\/\/dev-typografix.de\/probearbeiten","icon":"home-heart","keywords":["home","page"]},"wordpress-dashboard":{"title":"Dashboard","icon":"dashboard","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/","keywords":["dashboard","wordpress"]},"wordpress-menus":{"title":"Men\u00fcs","icon":"wordpress","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/nav-menus.php","keywords":["menu","wordpress"]},"wordpress-themes":{"title":"Themes","icon":"wordpress","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/themes.php","keywords":["themes","wordpress"]},"wordpress-customizer":{"title":"Customizer","icon":"wordpress","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/customize.php","keywords":["customizer","wordpress"]},"wordpress-plugins":{"title":"Plugins","icon":"wordpress","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/plugins.php","keywords":["plugins","wordpress"]},"wordpress-users":{"title":"Benutzer","icon":"wordpress","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/users.php","keywords":["users","profile","wordpress"]}},"name":"site"},"settings":{"title":"Einstellungen","dynamic":false,"items":{"general-settings":{"title":"Allgemeine Einstellungen","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor","keywords":["general","settings","elementor"]},"advanced":{"title":"Erweitert","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor#tab-advanced","keywords":["advanced","settings","elementor"]},"experiments":{"title":"Experimente","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor#tab-experiments","keywords":["settings","elementor","experiments"]},"custom-fonts":{"title":"Eigene Schriften","icon":"typography","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?post_type=elementor_font","keywords":["custom","fonts","elementor"]},"custom-icons":{"title":"Eigene Symbole","icon":"favorite","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?post_type=elementor_icons","keywords":["custom","icons","elementor"]}},"name":"settings"},"tools":{"title":"Werkzeuge","dynamic":false,"items":{"tools":{"title":"Werkzeuge","icon":"tools","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-tools","keywords":["tools","regenerate css","safe mode","debug bar","sync library","elementor"]},"replace-url":{"title":"URL ersetzen","icon":"tools","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-tools#tab-replace_url","keywords":["tools","replace url","domain","elementor"]},"maintenance-mode":{"title":"Wartungsmodus","icon":"tools","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-tools#tab-maintenance_mode","keywords":["tools","maintenance","coming soon","elementor"]},"import-export":{"title":"Import Export","icon":"import-export","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-tools#tab-import-export-kit","keywords":["tools","import export","import","export","kit"]},"version-control":{"title":"Versionskontrolle","icon":"time-line","url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-tools#tab-versions","keywords":["tools","version","control","rollback","beta","elementor"]}},"name":"tools"}}},"connect":[],"event-tracker":{"isUserDataShared":true}};
</script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/js/common.min.js?ver=3.14.1" id="elementor-common-js"></script>
<script id="elementor-app-loader-js-before">
var elementorAppConfig = {"menu_url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-app&ver=3.14.1#\/site-editor","assets_url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-content\/plugins\/elementor\/assets\/","pages_url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/edit.php?post_type=page","return_url":"https:\/\/dev-typografix.de\/probearbeiten\/","hasPro":true,"admin_url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/","login_url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-login.php","base_url":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin.php?page=elementor-app&ver=3.14.1","site-editor":[],"import-export":[],"kit-library":[],"onboarding":[]};
</script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/js/app-loader.min.js?ver=3.14.1" id="elementor-app-loader-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/themes/hello-theme-child-master/js/script1.js" id="hello-elementor-child-scripts-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor-pro/assets/lib/smartmenus/jquery.smartmenus.min.js?ver=1.0.1" id="smartmenus-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.14.1" id="elementor-pro-webpack-runtime-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.14.1" id="elementor-webpack-runtime-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.14.1" id="elementor-frontend-modules-js"></script>
<script id="elementor-pro-frontend-js-before">
var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/dev-typografix.de\/probearbeiten\/wp-admin\/admin-ajax.php","nonce":"c104ff9e47","urls":{"assets":"https:\/\/dev-typografix.de\/probearbeiten\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/dev-typografix.de\/probearbeiten\/wp-json\/"},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"}},"facebook_sdk":{"lang":"de_DE","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/dev-typografix.de\/probearbeiten\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
</script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.14.1" id="elementor-pro-frontend-js"></script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2" id="elementor-waypoints-js"></script>
<script id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Auf Facebook teilen","shareOnTwitter":"Auf Twitter teilen","pinIt":"Anheften","download":"Download","downloadImage":"Bild downloaden","fullscreen":"Vollbild","zoom":"Zoom","share":"Teilen","playVideo":"Video abspielen","previous":"Zur\u00fcck","next":"Weiter","close":"Schlie\u00dfen","a11yCarouselWrapperAriaLabel":"Carousel | Horizontal scrolling: Arrow Left & Right","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":461,"lg":821,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":460,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":820,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":true},"laptop":{"label":"Laptop","value":1440,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Breitbild","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.14.1","is_static":false,"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"a11y_improvements":true,"additional_custom_breakpoints":true,"container":true,"e_swiper_latest":true,"theme_builder_v2":true,"hello-theme-header-footer":true,"landing-pages":true,"nested-elements":true,"page-transitions":true,"notes":true,"loop":true,"form-submissions":true,"e_scroll_snap":true},"urls":{"assets":"https:\/\/dev-typografix.de\/probearbeiten\/wp-content\/plugins\/elementor\/assets\/"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"hello_header_menu_layout":"dropdown","viewport_mobile":460,"viewport_tablet":820,"viewport_tablet_extra":1200,"active_breakpoints":["viewport_mobile","viewport_tablet","viewport_tablet_extra"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","hello_header_logo_type":"title"},"post":{"id":4309,"title":"Urlaubsbetreuung%20%E2%80%93%20Probearbeiten","excerpt":"","featuredImage":false},"user":{"roles":["administrator"]}};
</script>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.14.1" id="elementor-frontend-js"></script><span id="elementor-device-mode" class="elementor-screen-only"></span>
<script src="https://dev-typografix.de/probearbeiten/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.14.1" id="pro-elements-handlers-js"></script><svg style="display: none;" class="e-font-icon-svg-symbols"></svg>



</div>
`;

faqAccordion();
