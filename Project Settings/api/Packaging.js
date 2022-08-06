class Setting {
    constructor() {
        /**
         * A Preview Showm.
         */
        this.preview = false

        /**
         * With sures at break_eternity.js file.
         * 
         * [Break Eternity Resources](https://github.com/Patashu/break_eternity.js/blob/master/break_eternity.js)
         * @param {any} value With be array for decimals.
         */
        this.arrayFromDecimal = (value) => {
            arrayGlobal.push(new Decimal(value))
        }
    }
}

class Packaging {
    constructor() {
        /**
         * The Name Incremental of Public Repository.
         */
        this.name = ""

        /**
         * The Channel for authors the public repository.
         */
        this.channels = []

        /**
         * Add the Channel.
         * @param {string} name With Names this arrays the public repository.
         */
        this.addChanel = (name) => {
            this.channels.push(name)
        }

        /**
         * The Description Incremental of Public Repository.
         */
        this.description = ""

        /**
         * This Version The Public Repository.
         */
        this.version = "0"

        /**
         * Setting of objects.
         */
        this.settings = new Setting()
    }
}