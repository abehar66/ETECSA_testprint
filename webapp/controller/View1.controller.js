sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/PDFViewer",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,PDFViewer, JSONModel) {
		"use strict";

		return Controller.extend("testprint.controller.View1", {
			onInit: function () {
/*				this._sValidPath = "/model/pdf/sample.pdf";
				
				this._oModel = new JSONModel({
					Source: this._sValidPath,
					Title: "TEST de Impresion PDF",
					Height: "600px"
				});

				this.getView().setModel(this._oModel);*/
			
            this._oModel = new sap.ui.model.json.JSONModel();
			this._oModel.loadData("./model/contextoModeloEvaluacion.json");
			this.getView().setModel(this._oModel,"ContextoTabla");

			this._pdfViewer = new PDFViewer();
			this.getView().addDependent(this._pdfViewer);
			
			},

			onPrint: function () {
				/*var _path = "/sap/opu/odata/sap/ZETECSA_NOMINA_SRV/FileSet(Pernr='" + sap.ui.getCore().CID + "',Gjahr='" + oView.byId("inputYear").getValue() + "',Monat='" +
				oView.byId("inputMonth").getSelectedKey() + "',Id='')/$value"; //?$expand=ToResumen,ToCabecera";

				var obj = new Object();
				obj.Src = _path;
				oView.setModel(new sap.ui.model.json.JSONModel(obj) , "ModelloPDF" );*/
				/*this.getView().byId("Print").setVisible(true);
				this.getView().byId("Print").open();*/
				//oView.byId("container_print").open();

				this._pdfViewer.setSource("./model/pdf/sample.pdf");
				this._pdfViewer.setTitle("PDF TEST");
				this._pdfViewer.open();
			}
		});
	});
