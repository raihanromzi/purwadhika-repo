class Mobil {
  brand
  #jenis
  #jumlahKabin
  #jumlahPintu
  #cc

  constructor(brand, jenis, jumlahKabin, jumlahPintu, cc) {
    this.#jenis = jenis
    this.#jumlahKabin = jumlahKabin
    this.#jumlahPintu = jumlahPintu
    this.#cc = cc
    this._brand = brand
    this._jenis = jenis
    this._jumlahKabin = jumlahKabin
    this._jumlahPintu = jumlahPintu
    this._cc = cc
  }

  get brand() {
    return this._brand
  }

  set brand(value) {
    this._brand = value
  }

  get jenis() {
    return this._jenis
  }

  set jenis(value) {
    this._jenis = value
  }

  get jumlahKabin() {
    return this._jumlahKabin
  }

  set jumlahKabin(value) {
    this._jumlahKabin = value
  }

  get jumlahPintu() {
    return this._jumlahPintu
  }

  set jumlahPintu(value) {
    this._jumlahPintu = value
  }

  get cc() {
    return this._cc
  }

  set cc(value) {
    this._cc = value
  }

  printInfoMobil() {
    console.log(`
                 Brand: ${this.brand}
                 Jenis: ${this.jenis}
                 Jumlah Kabin: ${this.jumlahKabin}
                 Jumlah Pintu: ${this.jumlahPintu}
                 CC: ${this.cc}
    `)
  }
}

const avanza = new Mobil('Avanza', 'Minibus', 3, 4, 1500)
const inova = new Mobil('Inova', 'Minibus', 3, 4, 2000)
const balleno = new Mobil('Balleno', 'Sedan', 2, 4, 1400)

console.log(avanza.brand)

avanza.printInfoMobil()
inova.printInfoMobil()
balleno.printInfoMobil()



