(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const h=()=>{const u=document.querySelector("[data-id='a7ba009']"),a=document.querySelectorAll("span.elementor-toggle-icon-closed"),c=Array.from(a),r=document.querySelectorAll("span.elementor-toggle-icon-opened"),e=Array.from(r),t=document.querySelectorAll(".elementor-tab-content"),i=Array.from(t);let o=!1,s,m,g;const b=(l,d,p)=>{l.style.display=o?"block":"none",d.firstElementChild.style.display=o?"none":"block",d.style.display=o?"none":"block",p.firstElementChild.style.display=o?"block":"none",p.style.display=o?"block":"none",c.filter(n=>n!==d).forEach(n=>{n.style.display="block",d.firstElementChild.style.display="block"}),e.filter(n=>n!=p).forEach(n=>{n.style.display="none"}),i.filter(n=>n!=l).forEach(n=>{n.style.display="none"})},f=l=>{console.log(l.target.tagName.toLowerCase()),l.target.tagName.toLowerCase()==="a"?(s=l.target.parentElement.nextElementSibling,m=l.target.parentNode.childNodes[1].firstElementChild,g=l.target.parentNode.childNodes[1].lastElementChild):(s=l.target.nextElementSibling,m=l.target.childNodes[1].firstElementChild,g=l.target.childNodes[1].lastElementChild),s.style.display==="block"?o=!1:o=!0,b(s,m,g)};u.addEventListener("click",f)};document.querySelector("#app").innerHTML=`
  <div>
   <div class="elementor-element elementor-element-a7ba009 e-con-full e-flex e-con" data-id="a7ba009" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
				<div class="elementor-element elementor-element-b42b04a elementor-widget elementor-widget-heading" data-id="b42b04a" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">FAQ</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-baa9837 elementor-widget elementor-widget-toggle" data-id="baa9837" data-element_type="widget" id="faq-container" data-widget_type="toggle.default">
				<div class="elementor-widget-container">
			<style>.elementor-toggle{text-align:left}.elementor-toggle .elementor-tab-title{font-weight:700;line-height:1;margin:0;padding:15px;border-bottom:1px solid #d5d8dc;cursor:pointer;outline:none}.elementor-toggle .elementor-tab-title .elementor-toggle-icon{display:inline-block;width:1em}.elementor-toggle .elementor-tab-title .elementor-toggle-icon svg{-webkit-margin-start:-5px;margin-inline-start:-5px;width:1em;height:1em}.elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-right{float:right;text-align:right}.elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-left{float:left;text-align:left}.elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-closed{display:block}.elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-opened{display:none}.elementor-toggle .elementor-tab-title.elementor-active{border-bottom:none}.elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-closed{display:none}.elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-opened{display:block}.elementor-toggle .elementor-tab-content{padding:15px;border-bottom:1px solid #d5d8dc;display:none}@media (max-width:460px){.elementor-toggle .elementor-tab-title{padding:12px}.elementor-toggle .elementor-tab-content{padding:12px 10px}}.e-con-inner>.elementor-widget-toggle,.e-con>.elementor-widget-toggle{width:var(--container-widget-width);--flex-grow:var(--container-widget-flex-grow)}</style>		<div class="elementor-toggle">
							<div class="elementor-toggle-item">
					<h3 id="elementor-tab-title-1951" class="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-1951" aria-expanded="false" tabindex="-1" aria-selected="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-plus"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-minus"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Wer betreut mein Kind?</a>
					</h3>

					<div id="elementor-tab-content-1951" class="elementor-tab-content elementor-clearfix" data-tab="1" role="region" aria-labelledby="elementor-tab-title-1951" style="display: none;" hidden="hidden"><p>Jedem LiBERO-Kind steht eine qualifizierte Betreuungsperson zur Seite – darunter sind Heilerziehungspfleger, Krankenschwestern und auch Studenten der Sozialpädagogik</p></div>
				</div>
							<div class="elementor-toggle-item">
					<h3 id="elementor-tab-title-1952" class="elementor-tab-title" data-tab="2" role="button" aria-controls="elementor-tab-content-1952" aria-expanded="false" tabindex="-1" aria-selected="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-plus"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-minus"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Umschalter #2</a>
					</h3>

					<div id="elementor-tab-content-1952" class="elementor-tab-content elementor-clearfix" data-tab="2" role="region" aria-labelledby="elementor-tab-title-1952" style="display: none;" hidden="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
				</div>
							<div class="elementor-toggle-item">
					<h3 id="elementor-tab-title-1953" class="elementor-tab-title" data-tab="3" role="button" aria-controls="elementor-tab-content-1953" aria-expanded="false" tabindex="-1" aria-selected="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-plus"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-minus"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Titel umschalten</a>
					</h3>

					<div id="elementor-tab-content-1953" class="elementor-tab-content elementor-clearfix" data-tab="3" role="region" aria-labelledby="elementor-tab-title-1953" style="display: none;" hidden="hidden">Inhalt umschalten</div>
				</div>
							<div class="elementor-toggle-item">
					<h3 id="elementor-tab-title-1954" class="elementor-tab-title" data-tab="4" role="button" aria-controls="elementor-tab-content-1954" aria-expanded="false">
												<span class="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
															<span class="elementor-toggle-icon-closed"><i class="fas fa-plus"></i></span>
								<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fas fa-minus"></i></span>
													</span>
												<a class="elementor-toggle-title" tabindex="0">Titel umschalten</a>
					</h3>

					<div id="elementor-tab-content-1954" class="elementor-tab-content elementor-clearfix" data-tab="4" role="region" aria-labelledby="elementor-tab-title-1954">Inhalt umschalten</div>
				</div>
										<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Wer betreut mein Kind?","acceptedAnswer":{"@type":"Answer","text":"<p>Jedem LiBERO-Kind steht eine qualifizierte Betreuungsperson zur Seite – darunter sind Heilerziehungspfleger, Krankenschwestern und auch Studenten der Sozialpädagogik</p>"}},{"@type":"Question","name":"Umschalter #2","acceptedAnswer":{"@type":"Answer","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}},{"@type":"Question","name":"Titel umschalten","acceptedAnswer":{"@type":"Answer","text":"Inhalt umschalten"}},{"@type":"Question","name":"Titel umschalten","acceptedAnswer":{"@type":"Answer","text":"Inhalt umschalten"}}]}<\/script>
					</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-5dde21a elementor-widget elementor-widget-html" data-id="5dde21a" data-element_type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
					</div>
				</div>
				</div>
  </div>
`;h();
