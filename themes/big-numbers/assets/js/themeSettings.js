var themeSettings = {
    theme: {
        name: 'big-numbers',
        horizontal: params.get('horizontal') === 'true',
        pokemonTCGCardSets: function () {
          let userDefinedSets = params.get('sets')

          if (userDefinedSets !== null && userDefinedSets.length > 0) {
              return userDefinedSets.split('|')
          }

          return [
            'base1',
            'base2',
            'basep',
            'ex3',
            'pop5',
            'pop1',
            'pop3',
            'xyp',
            'col1',
            'dp1',
            'dp2',
            'dp3',
            'dp4',
            'swsh1',
            'swsh2',
            'ex15',
            'ex12',
            'dp6',
            'pl2',
            'bw11',
            'bw10',
            'bw9',
            'bw8',
            'bw7',
            'bw6',
            'bw5',
            'bw4',
            'bw4',
            'bw3',
            'bw2',
            'bw1',
            'xy1',
            'xy2',
            'xy3',
            'xy4',
            'xy5',
            'xy6',
            'xy7',
            'xy8',
          ]
        }
    },

    pokeImg: {
        // will use species name instead (eg Bulbasaur.gif instead of 1.gif),
        useDexNumbers: false,
        // valid image types include: gif, jpg, jpeg, png etc
        fileType: 'png',
        ignoreForms: false,
        useCardArtBackground: params.get('useCardArtBackground') === 'true',
        useTypesGradient: params.get('useTypesGradient') === 'true',
    },

    // Change these to thwwwwwwwwe image paths

    imgPaths: {
      // normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/s-m/',
      // shiny: 'https://pokelink.cybershade.org/assets/sprites/pokemon/s-m/',
      // normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/home/normal/',
      // shiny: 'https://pokelink.cybershade.org/assets/sprites/pokemon/home/shiny/',
    //   normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/emerald/normal/',
    //   shiny: 'https://pokelink.cybershade.org/assets/sprites/pokemon/emerald/shiny/',
      normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/heartgold-soulsilver/normal/',
      shiny: 'https://pokelink.cybershade.org/assets/sprites/pokemon/heartgold-soulsilver/shiny/',
      /*normal: 'http://pokelink.cybershade.org/assets/sprites/pokemon/home/normal/',
      shiny: 'http://pokelink.cybershade.org/assets/sprites/pokemon/home/shiny/',*/
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
