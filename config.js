var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiYmVybmF0LXJjIiwiYSI6ImNranlpdzRpNjEyZm4yb2xzOWV5em0wdDkifQ.GhKYtX_Phm79RmYGivKviw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Volcans',
    subtitle: 'Els principal volcans actius del món',
    byline: 'M2B ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'volcan1',
            alignment: 'left',
            hidden: false,
            title: 'Eyjafjallajökull, Islandia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Eyjafjallaj%C3%B6kull_first_crater_20100329.jpg',
            description: 'También conocido como Eyjafjöll,2​ o Eyjafjalla,3​ es un volcán situado al norte de Skógar, en la región de Suðurland, al sur de Islandia.4​ Tiene entre 1651 m y 1666 m de altitud,​ y ha estado moderadamente activo en los últimos 8000 años.',
            location: {
                center: [-19.62, 63.63],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'volcan2',
            alignment: 'right',
            hidden: false,
            title: 'Monte Vesubio, Italia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [14.42555555, 40.82138888],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan3',
            alignment: 'left',
            hidden: false,
            title: 'Parc Natural de la Zona Volcànica de la Garrotxa',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Volc%C3%A0_del_Croscat.jpg/1280px-Volc%C3%A0_del_Croscat.jpg',
            description: 'El Parc Natural de la Zona Volcànica de la Garrotxa és un parc natural que es troba a la comarca de la Garrotxa. És el millor exponent de paisatge volcànic de la península Ibèrica. Té una quarantena de cons volcànics d´una edat compresa entre els 10.000[1] i els 700.000 anys, 10 cràters, 23 cons ben conservats i més de 20 colades de laves basàltiques.',
            location: {
                center: [ 2.48100045236776538, 42.17275451495915],
                zoom: 13,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan4',
            alignment: 'right',
            hidden: false,
            title: 'Volcà de Santa Margarida',
            image: '',
            description: 'Dins aquest Parc Natural, hi trobem la joia de la corona: el voldà de Santa Pau. <iframe width="560" height="315" src="https://www.youtube.com/embed/hp-zKKinGag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [2.5418385335298015, 42.141641689264546],
                zoom: 16,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
