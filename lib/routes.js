FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Home'});
    }
});

FlowRouter.route('/collections', {
    name: 'collections',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Store'});
    }
});

FlowRouter.route('/modern-living', {
    name: 'modern-living',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Modern-Living'});
    }
});

FlowRouter.route('/tld-dreamdesk', {
    name: 'tld-dreamdesk',
    action() {
        BlazeLayout.render('MainLayout', {main: 'TLD-Dreamdesk'});
    }
});

FlowRouter.route('/how', {
    name: 'how',
    action() {
        BlazeLayout.render('MainLayout', {main: 'How'});
    }
});

// INDIVIDUAL PRODUCT ROUTES
FlowRouter.route('/alex-desk', {
    name: 'alex-desk',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Alex-Desk'});
    }
});

FlowRouter.route('/kallax-shelf', {
    name: 'kallax-shelf',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Kallax-Shelf'});
    }
});

FlowRouter.route('/canon-printer', {
    name: 'canon-printer',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Canon-Printer'});
    }
});

FlowRouter.route('/imac-5k', {
    name: 'imac-5k',
    action() {
        BlazeLayout.render('MainLayout', {main: 'iMac-5k'});
    }
});

FlowRouter.route('/blue-yeti-whiteout', {
    name: 'blue-yeti-whiteout',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Blue-Yeti'});
    }
});

FlowRouter.route('/bose-headphones', {
    name: 'bose-headphones',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Bose-Headphones'});
    }
});

FlowRouter.route('/headphone-stand', {
    name: 'headphone-stand',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Headphone-Stand'});
    }
});

FlowRouter.route('/elago-mousepad', {
    name: 'elago-mousepad',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Elago-Mousepad'});
    }
});

FlowRouter.route('/polk-audio', {
    name: 'polk-audio',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Polk-Audio'});
    }
});

FlowRouter.route('/rain-design', {
    name: 'rain-design',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Rain-Design'});
    }
});

FlowRouter.route('/sabrent-usb-hub', {
    name: 'sabrent-hub',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Sabrent-Hub'});
    }
});

FlowRouter.route('/anker-lamp', {
    name: 'anker-lamp',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Anker-Lamp'});
    }
});

FlowRouter.route('/jackery-portable-battery', {
    name: 'jackery-battery',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Jackery-Battery'});
    }
});

FlowRouter.route('/elago-m2-stand', {
    name: 'elago-stand',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Elago-Stand'});
    }
});

FlowRouter.route('/microsoft-arc-mouse', {
    name: 'microsoft-mouse',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Microsoft-Mouse'});
    }
});
