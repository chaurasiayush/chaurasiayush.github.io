"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1392],{10480:function(e,a,t){a.Z={getDisplayPlayMethod:function(e){return e.NowPlayingItem?e.TranscodingInfo&&e.TranscodingInfo.IsVideoDirect&&e.TranscodingInfo.IsAudioDirect?"Remux":e.TranscodingInfo&&e.TranscodingInfo.IsVideoDirect?"DirectStream":"Transcode"===e.PlayState.PlayMethod?"Transcode":"DirectStream"===e.PlayState.PlayMethod||"DirectPlay"===e.PlayState.PlayMethod?"DirectPlay":void 0:null}}},1392:function(e,a,t){t.r(a),t.d(a,{default:function(){return B}}),t(61013),t(63238),t(61418),t(76056),t(43512),t(98010),t(5769),t(17460),t(14078),t(99785);var n=t(47005),l=(t(21865),t(44614)),s=t(78695),r=t(53218),i=t(10480),o=t(8782),d=t(1892),c=t.n(d),u=t(95760),p=t.n(u),f=t(38311),v=t.n(f),b=t(58192),h=t.n(b),y=t(38060),m=t.n(y),P=t(54865),g=t.n(P),S=t(11173),T={};T.styleTagTransform=g(),T.setAttributes=h(),T.insert=v().bind(null,"head"),T.domAPI=p(),T.insertStyleElement=m(),c()(S.Z,T),S.Z&&S.Z.locals&&S.Z.locals;var Z=t(53913);function I(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(){this.enabled(!1)}function C(e){return l.ZP.translate(""+e)}function D(e,a,t){var n,s,r,i,o=[];return e.TranscodingInfo&&(n=e.TranscodingInfo.VideoCodec,s=e.TranscodingInfo.AudioCodec,r=e.TranscodingInfo.Bitrate,i=e.TranscodingInfo.AudioChannels),n&&o.push({label:l.ZP.translate("LabelVideoCodec"),value:e.TranscodingInfo.IsVideoDirect?n.toUpperCase()+" (direct)":n.toUpperCase()}),s&&o.push({label:l.ZP.translate("LabelAudioCodec"),value:e.TranscodingInfo.IsAudioDirect?s.toUpperCase()+" (direct)":s.toUpperCase()}),"Transcode"===t&&(i&&o.push({label:l.ZP.translate("LabelAudioChannels"),value:i}),r&&o.push({label:l.ZP.translate("LabelBitrate"),value:M(r)}),e.TranscodingInfo.CompletionPercentage&&o.push({label:l.ZP.translate("LabelTranscodingProgress"),value:e.TranscodingInfo.CompletionPercentage.toFixed(1)+"%"}),e.TranscodingInfo.Framerate&&o.push({label:l.ZP.translate("LabelTranscodingFramerate"),value:e.TranscodingInfo.Framerate+" fps"}),e.TranscodingInfo.TranscodeReasons&&e.TranscodingInfo.TranscodeReasons.length&&o.push({label:l.ZP.translate("LabelReasonForTranscoding"),value:e.TranscodingInfo.TranscodeReasons.map(C).join("<br/>")}),e.TranscodingInfo.HardwareAccelerationType&&o.push({label:l.ZP.translate("LabelHardwareEncoding"),value:e.TranscodingInfo.HardwareAccelerationType})),o}function M(e){return e>1e6?(e/1e6).toFixed(1)+" Mbps":Math.floor(e/1e3)+" kbps"}function R(e,a){var t,n=[],s=r.O.currentMediaSource(a)||{},i=s.Bitrate,o=s.Size;s.Container&&n.push({label:l.ZP.translate("LabelProfileContainer"),value:s.Container}),o&&n.push({label:l.ZP.translate("LabelSize"),value:(t=o,t>=1073741824?parseFloat((t/1073741824).toFixed(1))+" GiB":t>=1048576?parseFloat((t/1048576).toFixed(1))+" MiB":Math.floor(t/1024)+" KiB")}),i&&n.push({label:l.ZP.translate("LabelBitrate"),value:M(i)});var d=(s.MediaStreams||[]).filter((function(e){return"Video"===e.Type}))[0]||{},c=d.Codec,u=r.O.getAudioStreamIndex(a),p=r.O.audioTracks(a).filter((function(e){return"Audio"===e.Type&&e.Index===u}))[0]||{},f=p.Codec,v=p.Channels,b=[];c&&b.push(c.toUpperCase()),d.Profile&&b.push(d.Profile),b.length&&n.push({label:l.ZP.translate("LabelVideoCodec"),value:b.join(" ")}),d.BitRate&&n.push({label:l.ZP.translate("LabelVideoBitrate"),value:M(d.BitRate)}),d.VideoRangeType&&n.push({label:l.ZP.translate("LabelVideoRangeType"),value:d.VideoRangeType});var h=[];return f&&h.push(f.toUpperCase()),p.Profile&&h.push(p.Profile),h.length&&n.push({label:l.ZP.translate("LabelAudioCodec"),value:h.join(" ")}),p.BitRate&&n.push({label:l.ZP.translate("LabelAudioBitrate"),value:M(p.BitRate)}),v&&n.push({label:l.ZP.translate("LabelAudioChannels"),value:v}),p.SampleRate&&n.push({label:l.ZP.translate("LabelAudioSampleRate"),value:p.SampleRate+" Hz"}),p.BitDepth&&n.push({label:l.ZP.translate("LabelAudioBitDepth"),value:p.BitDepth}),n}function x(e,a){var t=function(){!function(e,a){var t=(new Date).getTime();t-(e.lastRender||0)<700||(e.lastRender=t,function(e,a){var t=a.getStats?a.getStats():Promise.resolve({}),n=function(e,a){if((new Date).getTime()-(e.lastSessionTime||0)<1e4)return Promise.resolve(e.lastSession);var t=Z.Z.getApiClient(r.O.currentItem(a).ServerId);return t.getSessions({deviceId:t.deviceId()}).then((function(a){return e.lastSession=a[0]||{},e.lastSessionTime=(new Date).getTime(),Promise.resolve(e.lastSession)}),(function(){return Promise.resolve({})}))}(e,a);return Promise.all([t,n]).then((function(e){var t=e[0].categories||[],n=e[1],s=i.Z.getDisplayPlayMethod(n),d=s;"DirectPlay"===s?d=l.ZP.translate("DirectPlaying"):"Remux"===s?d=l.ZP.translate("Remuxing"):"DirectStream"===s?d=l.ZP.translate("DirectStreaming"):"Transcode"===s&&(d=l.ZP.translate("Transcoding"));var c={stats:[],name:l.ZP.translate("LabelPlaybackInfo")};c.stats.unshift({label:l.ZP.translate("LabelPlayMethod"),value:d}),c.stats.unshift({label:l.ZP.translate("LabelPlayer"),value:a.name});var u=[];u.push(c);for(var p=0,f=t.length;p<f;p++){var v=t[p];"audio"===v.type?v.name=l.ZP.translate("LabelAudioInfo"):"video"===v.type&&(v.name=l.ZP.translate("LabelVideoInfo")),u.push(v)}var b=l.ZP.translate("LabelTranscodingInfo");"Remux"===s?b=l.ZP.translate("LabelRemuxingInfo"):"DirectStream"===s&&(b=l.ZP.translate("LabelDirectStreamingInfo")),n.TranscodingInfo&&u.push({stats:D(n,0,s),name:b}),u.push({stats:R(0,a),name:l.ZP.translate("LabelOriginalMediaInfo")});var h,y,m=Z.Z.getApiClient(r.O.currentItem(a).ServerId);return o.Z.Manager.isSyncPlayEnabled()&&m.isMinServerVersion("10.6.0")&&u.push({stats:(h=[],y=o.Z.Manager.getStats(),h.push({label:l.ZP.translate("LabelSyncPlayTimeSyncDevice"),value:y.TimeSyncDevice}),h.push({label:l.ZP.translate("LabelSyncPlayTimeSyncOffset"),value:y.TimeSyncOffset+" "+l.ZP.translate("MillisecondsUnit")}),h.push({label:l.ZP.translate("LabelSyncPlayPlaybackDiff"),value:y.PlaybackDiff+" "+l.ZP.translate("MillisecondsUnit")}),h.push({label:l.ZP.translate("LabelSyncPlaySyncMethod"),value:y.SyncMethod}),h),name:l.ZP.translate("LabelSyncPlayInfo")}),Promise.resolve(u)}))}(e,a).then((function(a){var t=e.element;t&&function(e,a){e.querySelector(".playerStats-stats").innerHTML=a.map((function(e){var a="",t=e.stats;t.length&&e.name&&(a+='<div class="playerStats-stat playerStats-stat-header">',a+='<div class="playerStats-stat-label">',a+=e.name,a+="</div>",a+='<div class="playerStats-stat-value">',a+=e.subText||"",a+="</div>",a+="</div>");for(var n=0,l=t.length;n<l;n++){a+='<div class="playerStats-stat">';var s=t[n];a+='<div class="playerStats-stat-label">',a+=s.label,a+="</div>",a+='<div class="playerStats-stat-value">',a+=s.value,a+="</div>",a+="</div>"}return a})).join("")}(t,a)})))}(e,a)};e.onTimeUpdate=t,n.Events.on(a,"timeupdate",t)}function A(e,a){var t=e.onTimeUpdate;t&&n.Events.off(a,"timeupdate",t)}var w=function(){function e(a){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=a,function(e){var a,t=document.createElement("div");t.classList.add("playerStats"),s.Z.tv&&t.classList.add("playerStats-tv"),t.classList.add("hide"),a=s.Z.tv?"":'<button type="button" is="paper-icon-button-light" class="playerStats-closeButton"><span class="material-icons close" aria-hidden="true"></span></button>';var n=s.Z.tv?"playerStats-content playerStats-content-tv":"playerStats-content";t.innerHTML='<div class="'+n+'">'+a+'<div class="playerStats-stats"></div></div>',(a=t.querySelector(".playerStats-closeButton"))&&a.addEventListener("click",L.bind(e)),document.body.appendChild(t),e.element=t}(this),this.enabled(!0)}var a,t;return a=e,t=[{key:"enabled",value:function(e){if(null==e)return this._enabled;var a=this.options;a&&(this._enabled=e,e?(this.element.classList.remove("hide"),x(this,a.player)):(this.element.classList.add("hide"),A(this,a.player)))}},{key:"toggle",value:function(){this.enabled(!this.enabled())}},{key:"destroy",value:function(){var e=this.options;e&&(this.options=null,A(this,e.player));var a=this.element;a&&(a.parentNode.removeChild(a),this.element=null)}}],t&&I(a.prototype,t),Object.defineProperty(a,"prototype",{writable:!1}),e}(),B=w},11173:function(e,a,t){var n=t(54933),l=t.n(n),s=t(93476),r=t.n(s)()(l());r.push([e.id,".playerStats{background:rgba(28,28,28,.8);border-radius:.3em;color:#fff;left:1.5em;position:absolute;top:5em}.playerStats-tv{top:4em}.playerStats-content{font-size:84%;position:relative}.playerStats-content-tv{font-size:60%}.playerStats-closeButton{color:#ccc;position:absolute;right:.25em;top:.25em;z-index:1}.playerStats-stats{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;max-width:50em;overflow:hidden;padding:0 3em 1em 1em}.playerStats-stat{display:-webkit-flex;display:flex;margin-left:1em}.playerStats-stat-label{font-weight:500;margin:0 .5em 0 0}.playerStats-stat-header{margin:1em 1em 0 0}.playerStats-stat-value{color:#ddd}",""]),a.Z=r}}]);