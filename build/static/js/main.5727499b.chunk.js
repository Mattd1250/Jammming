(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n,r,s=a(0),c=a.n(s),i=a(9),o=a.n(i),l=(a(17),a(2)),u=a(3),h=a(6),p=a(4),m=a(5),d=a(1),b=(a(19),a(21),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={term:""},a.search=a.search.bind(Object(d.a)(Object(d.a)(a))),a.handleTermChange=a.handleTermChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"search",value:function(e){e.preventDefault(),this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",{className:"SearchBar"},c.a.createElement("form",{onSubmit:this.search},c.a.createElement("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.handleTermChange})),c.a.createElement("a",{onClick:this.search},"SEARCH"))}}]),t}(s.Component)),k=(a(23),a(25),a(27),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={isRemoval:!1},a.handleAddTrack=a.handleAddTrack.bind(Object(d.a)(Object(d.a)(a))),a.handleRemoveTrack=a.handleRemoveTrack.bind(Object(d.a)(Object(d.a)(a))),a.renderAction=a.renderAction.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"renderAction",value:function(){return this.props.isRemoval?c.a.createElement("a",{className:"Track-action",onClick:this.handleRemoveTrack},"-"):c.a.createElement("a",{className:"Track-action",onClick:this.handleAddTrack},"+")}},{key:"handleAddTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"handleRemoveTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Track"},c.a.createElement("div",{className:"Track-information"},console.log(this.props),c.a.createElement("h3",null,this.props.track.name),c.a.createElement("p",null,this.props.track.artist," | ",this.props.track.album)),this.renderAction())}}]),t}(s.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"TrackList"},this.props.tracks.map(function(t){return c.a.createElement(k,{key:t.uri,track:t,onAdd:e.props.onAdd,isRemoval:e.props.isRemoval,onRemove:e.props.onRemove})}))}}]),t}(s.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleNameChange=a.handleNameChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Playlist"},c.a.createElement("input",{value:this.props.playlistName,onChange:this.handleNameChange}),c.a.createElement(f,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),c.a.createElement("a",{className:"Playlist-save",onClick:this.props.onSave},"SAVE TO SPOTIFY"))}}]),t}(s.Component),y=(a(29),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"SearchResults"},c.a.createElement("h2",null,"Results"),c.a.createElement(f,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1}))}}]),t}(s.Component)),O=a(7),j=a.n(O),T=a(10),g={getAccessToken:function(){if(n)return n;if(window.location.href.match(/access_token=([^&]*)/)&&window.location.href.match(/expires_in=([^&]*)/))return n=window.location.href.match(/access_token=([^&]*)/)[1],r=window.location.href.match(/expires_in=([^&]*)/)[1],window.setTimeout(function(){return n=""},1e3*r),window.history.pushState("Access Token",null,"/"),n;var e="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("59649a72094c46508c95980e7a188a9d","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("https://everly.surge.sh");window.location=e},search:function(e){return n||(n=this.getAccessToken()),console.log(n),fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e.replace(" ","%20")),{headers:{Authorization:"Bearer ".concat(n)}}).then(function(e){return e.json()}).then(function(e){if(e.tracks.items)return e.tracks.items.map(function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}})})},savePlaylist:function(){var e=Object(T.a)(j.a.mark(function e(t,a){var r,s,c,i,o;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n||(n=this.getAccessToken()),t&&a){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,fetch("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer ".concat(n)}});case 6:if((c=e.sent).ok){e.next=10;break}return alert("There was a problem retrieving your user ID."),e.abrupt("return");case 10:return e.next=12,c.json();case 12:return i=e.sent,r=i.id,e.next=16,fetch("https://api.spotify.com/v1/users/".concat(r,"/playlists"),{method:"POST",headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify({name:t})});case 16:if((o=e.sent).ok){e.next=20;break}return alert("There was a problem posting the playlist name."),e.abrupt("return");case 20:return e.next=22,o.json();case 22:return i=e.sent,s=i.id,e.next=26,fetch("https://api.spotify.com/v1/playlists/".concat(s,"/tracks"),{method:"POST",headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify({uris:a})});case 26:if(e.sent.ok){e.next=30;break}return alert("There was a problem posting the playlist tracks."),e.abrupt("return");case 30:e.next=36;break;case 32:return e.prev=32,e.t0=e.catch(3),console.log(e.t0),e.abrupt("return");case 36:return e.abrupt("return","Done");case 37:case"end":return e.stop()}},e,this,[[3,32]])}));return function(t,a){return e.apply(this,arguments)}}()},w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={searchResults:[],playlistName:"New Playlist",playlistTracks:[]},a.addTrack=a.addTrack.bind(Object(d.a)(Object(d.a)(a))),a.removeTrack=a.removeTrack.bind(Object(d.a)(Object(d.a)(a))),a.updatePlaylistName=a.updatePlaylistName.bind(Object(d.a)(Object(d.a)(a))),a.savePlaylist=a.savePlaylist.bind(Object(d.a)(Object(d.a)(a))),a.search=a.search.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"addTrack",value:function(e){var t=this.state.playlistTracks;if(t.find(function(t){return t.uri===e.uri}))return alert("This is already in Playlist");t.push(e),this.setState({playlistTracks:t})}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks;t=this.state.playlistTracks.filter(function(t){return t.id!==e.id}),this.setState({playlistTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map(function(e){return e.uri});g.savePlaylist(this.state.playlistName,t).then(function(t){t&&(e.setState({playlistName:"New Playlist"}),e.setState({playlistTracks:[]}))})}},{key:"search",value:function(e){var t=this;g.search(e).then(function(e){t.setState({searchResults:e})})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Ja",c.a.createElement("span",{className:"highlight"},"mmm"),"ing"),c.a.createElement("div",{className:"App"},c.a.createElement(b,{onSearch:this.search}),c.a.createElement("div",{className:"App-playlist"},c.a.createElement(y,{searchResults:this.state.searchResults,onAdd:this.addTrack}),c.a.createElement(v,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist}))))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.5727499b.chunk.js.map