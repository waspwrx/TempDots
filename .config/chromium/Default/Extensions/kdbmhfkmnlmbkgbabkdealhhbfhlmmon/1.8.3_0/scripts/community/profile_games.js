'use strict';

var text,
    link,
    element,
    i,
    appID,
    dropdowns = document.querySelectorAll( '[id^=links_dropdown_]' );

for( i = 0; i < dropdowns.length; i++ )
{
	element = dropdowns[ i ];
	
	appID = element.id.replace( 'links_dropdown_', '' );
	
	element = element.querySelector( '.popup_body2' );
	
	if( element )
	{
		text = document.createElement( 'h5' );
		text.appendChild( document.createTextNode( 'View on Steam Database' ) );
		
		link = document.createElement( 'a' );
		link.className = 'popup_menu_item2 tight';
		link.href = GetHomepage() + 'app/' + appID + '/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamDB%20Extension';
		link.appendChild( text );
		
		element.appendChild( link );
	}
}

// TODO: Hook into the page and either edit gameLinksPopupTemplate or hook BuildGameRow function to handle UpdateChangingGames if it breaks
