export default class Profile {
    constructor(nombre, image, voice, param) {
        this.nombre = nombre;
        this.avatar = image;
        this.voice = voice;
        this.rate = param.rate;
        this.pitch = param.pitch;
        this.color = param.color;
        this.volume = param.volume;
    }
}
