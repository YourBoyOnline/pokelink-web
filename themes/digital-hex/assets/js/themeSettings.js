var themeSettings = {
    theme: {
        name: 'digtial-hex',
        hideHPBar: params.get('hide_hp') === 'true' || false,
        staggered: !(params.get('flat') === 'true' || false),
    },

    pokeImg: {
        // will use species name instead (eg Bulbasaur.gif instead of 1.gif),
        useDexNumbers: false,
        // valid image types include: gif, jpg, jpeg, png etc
        fileType: 'png',
    },

    // Change these to thwwwwwwwwe image paths

    imgPaths: {
      normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/home/normal/',
    //   normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/home/normal/',
      shiny: 'https://pokelink.cybershade.org/assets/sprites/pokemon/home/shiny/',
      party: 'https://pokelink.cybershade.org/assets/sprites/pokemon/gen8/party/',
      animatedEgg: 'https://pokelink.cybershade.org/assets/sprites/egg.gif',
      staticEgg: 'https://www.cpokemon.com/pokes/home/0.png',
      unknown: 'https://pokelink.cybershade.org/assets/sprites/',
      badges: 'https://pokelink.cybershade.org/assets/sprites/badges/',
      status: 'https://pokelink.cybershade.org/assets/sprites/status/',
      types: 'https://pokelink.cybershade.org/assets/sprites/types/',
      items: 'https://pokelink.cybershade.org/assets/sprites/items/',
    },
};
