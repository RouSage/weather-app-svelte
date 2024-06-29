export type Geocode = {
    name: string;
    local_names?: Record<string, string>;
    lat: number;
    lon: number;
    country: string;
    state?: string;
};

export type Weather = {
    coord: {
        lat: number;
        long: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
        sea_level: number;
        grnd_level: number;
        visibility: number;
        wind?: {
            speed: number;
            deg: number;
            gust: number;
        };
        clouds?: {
            all: number;
        };
        rain?: {
            '1h'?: number;
            '3h'?: number;
        };
        snow?: {
            '1h'?: number;
            '3h'?: number;
        };
        dt: number;
        timezone: number;
        cod: number;
    };
};
