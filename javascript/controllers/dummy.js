class DummyController {
    constructor(manager, ready) {
        this.key = 'dummy'
        this.playing = false
        this.seeking = false
        this.manager = manager
        
        this.pending = {
            stop: false,
            play: false,
            pause: false,
            seek: false
        }

        this.ready = ready
    }

    hook() {}

    play(muted) {}

    pause() {}

    stop() {}

    seek(time) {}

    set(source) {}

    time() {
        return null
    }

    seeked() {
        if (!this.seeking)
            return
        
        this.seeking = false
        this.manager.controllerSeeked(this)
    }

    controls(mediaSession) {
        mediaSession.setActionHandler('play', () => fetch(`https://${resourceName}/mediaKey`, {
            method: 'POST',
            body: JSON.stringify({
                type: 'play',
                uuid: this.manager.uuid
            })
        }).catch(error => {}))

        mediaSession.setActionHandler('pause', () => fetch(`https://${resourceName}/mediaKey`, {
            method: 'POST',
            body: JSON.stringify({
                type: 'pause',
                uuid: this.manager.uuid
            })
        }).catch(error => {}))

        mediaSession.setActionHandler('stop', () => fetch(`https://${resourceName}/mediaKey`, {
            method: 'POST',
            body: JSON.stringify({
                type: 'stop',
                uuid: this.manager.uuid
            })
        }).catch(error => {}))

        mediaSession.setActionHandler('seekbackward', () => fetch(`https://${resourceName}/mediaKey`, {
            method: 'POST',
            body: JSON.stringify({
                type: 'seekbackward',
                uuid: this.manager.uuid
            })
        }).catch(error => {}))

        mediaSession.setActionHandler('seekforward', () => fetch(`https://${resourceName}/mediaKey`, {
            method: 'POST',
            body: JSON.stringify({
                type: 'seekforward',
                uuid: this.manager.uuid
            })
        }).catch(error => {}))

        mediaSession.setActionHandler('seekto', () => fetch(`https://${resourceName}/mediaKey`, {
            method: 'POST',
            body: JSON.stringify({
                type: 'seekto',
                uuid: this.manager.uuid
            })
        }).catch(error => {}))

        mediaSession.setActionHandler('previoustrack', () => fetch(`https://${resourceName}/mediaKey`, {
            method: 'POST',
            body: JSON.stringify({
                type: 'previoustrack',
                uuid: this.manager.uuid
            })
        }).catch(error => {}))

        mediaSession.setActionHandler('nexttrack', () => fetch(`https://${resourceName}/mediaKey`, {
            method: 'POST',
            body: JSON.stringify({
                type: 'nexttrack',
                uuid: this.manager.uuid
            })
        }).catch(error => {}))

        mediaSession.setActionHandler('skipad', () => fetch(`https://${resourceName}/mediaKey`, {
            method: 'POST',
            body: JSON.stringify({
                type: 'skipad',
                uuid: this.manager.uuid
            })
        }).catch(error => {}))
    }
}
