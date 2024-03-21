    function toggleTheme(theme) {
      const body = document.body;
	  
	  
	  // switch (theme) {
        // case 'parchment':
          // body.className = 'console';
          // break;
        // case 'console':
          // body.className = 'parchment';
          // break;
        // default:
		  // body.className = 'parchment';
          // break;
      // }
	// }

      // Toggle between console and parchment themes
      if (body.className === 'console') {
        body.className = 'parchment';
      } else {
        body.className = 'console';
      }
    }