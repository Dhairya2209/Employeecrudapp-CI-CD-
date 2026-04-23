sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/cuscrud/customercrudapp/test/integration/pages/CustomersList",
	"demo/cuscrud/customercrudapp/test/integration/pages/CustomersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/cuscrud/customercrudapp') + '/test/flp.html#app-preview',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage
        },
        async: true
    });

    return runner;
});

