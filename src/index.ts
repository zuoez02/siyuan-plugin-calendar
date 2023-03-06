import siyuan, { Plugin, clientApi } from 'siyuan';
import Button from './button.vue';
import { createApp } from "vue"

class CalendarPlugin extends Plugin {
    el: HTMLDivElement;

    constructor() {
        super();
    }

    onload() {
        this.el = document.createElement('div');
        document.body.appendChild(this.el);
        const ComponentApp = createApp(Button);
        ComponentApp.mount(this.el);
        clientApi.addToolbarRight(this.el);
        console.log('load calendar plugin');
    }

    onunload() {
        this.el?.remove();
    }
}

export default CalendarPlugin;
