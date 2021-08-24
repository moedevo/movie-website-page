const Movie = class {
    constructor(title, genre, cast, plotSummary, director, releasedDate, runtime, countriesOfOrigin, quotes, language, image) {
        this.title = title;
        this.genre = genre;
        this.cast = cast;
        this.plotSummary = plotSummary;
        this.director = director;
        this.releasedDate = releasedDate;
        this.runtime = runtime;
        this.quotes = quotes;
        this.countriesOfOrigin = countriesOfOrigin;
        this.language = language;
        this.image = image;
    };
    movieAge() {
        let now = new Date();
        let acquired = new Date(this.releasedDate);
        let elapsed = now - acquired;
        let YearsSinceIssued = Math.floor(elapsed / (1000 * 3600 * 24));
        return YearsSinceIssued;
    };
};
export default Movie;