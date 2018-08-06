'use strict';

var container = document.querySelector( '.review_app_actions' );

if( container )
{
	// image
	var image = document.createElement( 'img' );
	image.className = 'toolsIcon steamdb_ogg_icon';
	image.src = GetLocalResource( 'icons/white.svg' );
	
	// link
	var link = document.createElement( 'a' );
	link.className = 'general_btn panel_btn';
	link.href = GetHomepage() + 'app/' + GetCurrentAppID() + '/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamDB%20Extension';
	link.appendChild( image );
	link.appendChild( document.createTextNode( 'View on Steam Database' ) );
	
	container.insertBefore( link, null );
}
