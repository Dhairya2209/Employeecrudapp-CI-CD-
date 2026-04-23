sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/empcrud/employeecrudapp/test/integration/pages/EmployeesList",
	"demo/empcrud/employeecrudapp/test/integration/pages/EmployeesObjectPage"
], function (JourneyRunner, EmployeesList, EmployeesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/empcrud/employeecrudapp') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeesList: EmployeesList,
			onTheEmployeesObjectPage: EmployeesObjectPage
        },
        async: true
    });

    return runner;
});

