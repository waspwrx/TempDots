( function()
{
	'use strict';
	
	var link,
	    homepage = document.getElementById( 'steamdb_subscriptions_hook' ).dataset.homepage,
	    originalDropdownSelectOption = window.dropdownSelectOption;
	
	window.dropdownSelectOption = function( dropdownName, subId )
	{
		try
		{
			link = document.getElementById( 'add_to_cart_' + dropdownName + '_description_text' );
			link = link.parentNode.querySelector( '.steamdb_link' );
			
			link.href = homepage + 'sub/' + subId + '/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamDB%20Extension';
			link.querySelector( '.steamdb_subid' ).textContent = '(' + subId + ')';
		}
		catch( e )
		{
			// Don't break website functionality if something fails above
		}
		
		originalDropdownSelectOption.apply( this, arguments );
	};
}() );
