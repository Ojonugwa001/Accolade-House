!function(e,t,a,r,i,n,s,_,u,p){a(t).ready(function(){function l(){a(".tribe-events-day-time-slot").length&&(a(".tribe-events-day-time-slot").find(".vevent:last").addClass("tribe-events-last"),a(".tribe-events-day-time-slot:first").find(".vevent:first").removeClass("tribe-events-first"))}function o(e){if("change_view"!=tribe_events_bar_action){if(e.preventDefault(),s.ajax_running)return;var t=a("#tribe-bar-date").val();s.popping=!1,t.length?(s.date=a("#tribe-bar-date").val(),r.cur_url=r.default_permalinks?v+"="+r.cur_date:v+r.cur_date+"/"):(s.date=r.cur_date,r.cur_url=r.default_permalinks?v+"="+r.cur_date:v+r.cur_date+"/"),n.pre_ajax(function(){c()})}}function c(){n.invalid_date(s.date)||(s.pushcount=0,s.ajax_running=!0,s.popping||(s.url_params={},s.params={action:"tribe_event_day",eventDate:s.date,featured:n.is_featured()},s.url_params={action:"tribe_event_day"},s.url_params.hasOwnProperty("tribe_event_display")||(s.url_params.tribe_event_display=s.view),s.category&&(s.params.tribe_event_category=s.category),r.default_permalinks&&(s.url_params.hasOwnProperty("eventDate")||(s.url_params.eventDate=s.date),s.url_params.hasOwnProperty("post_type")||(s.url_params.post_type=u.events_post_type),s.url_params.hasOwnProperty("eventDisplay")||(s.url_params.eventDisplay=s.view)),a(i).trigger("tribe_ev_serializeBar"),s.params=a.param(s.params),s.url_params=a.param(s.url_params),a(i).trigger("tribe_ev_collectParams"),s.pushstate=!0,s.do_string=!1,(s.pushcount>0||s.filters||r.default_permalinks)&&(s.pushstate=!1,s.do_string=!0)),_.pushstate&&!s.filter_cats?(p&&tec_debug.time("Day View Ajax Timer"),a(i).trigger("tribe_ev_ajaxStart").trigger("tribe_ev_dayView_AjaxStart"),a("#tribe-events-content .tribe-events-loop").tribe_spin(),a.post(TribeCalendar.ajaxurl,s.params,function(e){if(s.initial_load=!1,n.enable_inputs("#tribe_events_filters_form","input, select"),e.success){s.ajax_running=!1,r.ajax_response={total_count:parseInt(e.total_count),view:e.view,max_pages:"",tribe_paged:"",timestamp:(new Date).getTime()};var _=a.parseHTML(e.html);a("#tribe-events-content").replaceWith(_),0===e.total_count&&a("#tribe-events-header .tribe-events-sub-nav").empty(),a(".tribe-events-promo").next(".tribe-events-promo").remove(),s.page_title=a("#tribe-events-header").data("title"),s.view_title=a("#tribe-events-header").data("viewtitle"),t.title=s.page_title,a(".tribe-events-page-title").html(s.view_title),r.cur_url=n.get_base_url(),(a("#tribe-events.tribe-events-shortcode").length||s.do_string)&&(-1!==r.cur_url.indexOf("?")&&(r.cur_url=r.cur_url.split("?")[0]),r.cur_url=r.cur_url+"?"+s.url_params),s.do_string&&history.pushState({tribe_date:s.date,tribe_params:s.params},s.page_title,r.cur_url),s.pushstate&&history.pushState({tribe_date:s.date,tribe_params:s.params},s.page_title,r.cur_url),l(),a(i).trigger("tribe_ev_ajaxSuccess").trigger("tribe_ev_dayView_AjaxSuccess"),a(i).trigger("ajax-success.tribe").trigger("tribe_ev_dayView_AjaxSuccess"),p&&tec_debug.timeEnd("Day View Ajax Timer")}})):s.url_params.length?e.location=r.cur_url+"?"+s.url_params:e.location=r.cur_url)}var d=a('[class^="tribe-events-nav-"] a'),v="/";if("undefined"!=typeof u.events_base?v=u.events_base:d.length&&(v=d.first().attr("href").slice(0,-11)),s.filter_cats&&(v=a("#tribe-events-header").data("baseurl").slice(0,-11)),r.default_permalinks&&(v=v.split("?")[0]),s.date=a("#tribe-events-header").data("date"),l(),_.pushstate&&!_.map_view()){var b="action=tribe_event_day&eventDate="+s.date;r.params.length&&(b=b+"&"+r.params),s.category&&(b=b+"&tribe_event_category="+s.category),n.is_featured()&&(b+="&featured=1"),history.replaceState({tribe_params:b,tribe_url_params:r.params},"",location.href),a(e).on("popstate",function(e){var t=e.originalEvent.state;t&&(s.do_string=!1,s.pushstate=!1,s.popping=!0,s.params=t.tribe_params,n.pre_ajax(function(){c()}),n.set_form(s.params))})}a("#tribe-events").on("click",".tribe-events-nav-previous a, .tribe-events-nav-next a",function(e){if(e.preventDefault(),!s.ajax_running&&!s.updating_picker){var t=a(this);s.popping=!1,s.date=t.attr("data-day"),s.filter_cats?r.cur_url=v+s.date+"/":r.cur_url=t.attr("href"),"0"!==s.datepicker_format?n.update_picker(tribeDateFormat(s.date,r.datepicker_formats.main[s.datepicker_format])):n.update_picker(s.date),n.pre_ajax(function(){c()})}}),n.snap("#tribe-events-bar","#tribe-events","#tribe-events-footer .tribe-events-nav-previous a, #tribe-events-footer .tribe-events-nav-next a"),a("form#tribe-bar-form").on("submit",function(e){o(e)}),(_.no_bar()||_.live_ajax()&&_.pushstate)&&a("#tribe-bar-date").on("changeDate",function(e){s.updating_picker||_.reset_on()||(s.popping=!1,"0"!==s.datepicker_format?s.date=tribeDateFormat(a(this).bootstrapDatepicker("getDate"),"tribeQuery"):s.date=a(this).val(),r.cur_url=r.default_permalinks?v:v+s.date+"/",n.pre_ajax(function(){c()}))}),a(i).on("tribe_ev_runAjax",function(){c()}),a(i).on("tribe_ev_updatingRecurrence",function(){s.filter_cats?r.cur_url=r.default_permalinks?v+"="+r.cur_date:v+r.cur_date+"/":r.cur_url=a("#tribe-events-header").attr("data-baseurl"),s.popping=!1}),p&&tec_debug.info("TEC Debug: tribe-events-ajax-day.js successfully loaded"),s.view&&p&&tec_debug.timeEnd("Tribe JS Init Timer")})}(window,document,jQuery,tribe_ev.data,tribe_ev.events,tribe_ev.fn,tribe_ev.state,tribe_ev.tests,tribe_js_config,tribe_debug);