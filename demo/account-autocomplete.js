import '@polymer/polymer/polymer-legacy.js';

import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-ripple/paper-ripple.js';
import '../paper-autocomplete.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*
  This example shows how to implement your own autocomplete with custom template and search function.
*/
Polymer({
  _template: html`
    <!-- When using custom template and or custom query function, it is important to also set the \`textProperty\`
     and \`valueProperty properties\`. -->
    <paper-autocomplete label="Select Account" id="input-local" no-label-float="true" source="[[accounts]]" text-property="accountNumber" value-property="id">
        <template slot="autocomplete-custom-template">
          <!-- NOTICE: Due to shadow-dom, custom template styles need to be included with the template in Polymer 2.x -->
          <style>
            :host {
              display: block;
            }

            paper-item.account-item {
              padding: 8px 16px;
            }

            .company-name {
              color: #333;
            }

            .account-number, .email {
              margin-top: 4px;
              color: #999;
            }

            .email {
              font-size: small;
            }

            /**
             * IE11 paper-item min-height bug: https://github.com/PolymerElements/paper-item/issues/35
             * If you are running on IE11, add this lines to reset min-height on IE11
             */
            @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
              paper-item.account-item {
                min-height: 100% !important;
                height: auto !important;

                /**
                 * If you are experimenting that some CSS properties for paper-item are not overriden in Polymer 2.x with IE11,
                 * please add !important to ensure the shadow-dom v1 polyfill works properly
                 */
                padding: 8px 16px !important;
              }
            }
          </style>
          <paper-item class="account-item" role="option" aria-selected="false">
            <div>
              <div class="company-name">[[item.companyName]]</div>
              <div class="account-number">[[item.accountNumber]]</div>
              <div class="email">[[item.email]]</div>
            </div>
            <paper-ripple></paper-ripple>
          </paper-item>
        </template>
    </paper-autocomplete>
`,

  is: "account-autocomplete",

  properties: {
    accounts: {
      type: Array,
      value: [
        {"companyName":"Goyette-Lebsack","accountNumber":"CZ91 5363 3967 6009 8080 9459","id":"cb515c77-6924-476d-8c52-9744cb84dc09","email":"kfranklin0@addthis.com"},
        {"companyName":"Hickle, Lesch and Bernier","accountNumber":"AL38 5705 1570 WVGB 9W0Y KIVE JDPN","id":"6404e851-85cc-4d0d-9b19-9c8932e03522","email":"ccruz1@goo.gl"},
        {"companyName":"Lemke, Marks and Ebert","accountNumber":"NO29 9240 0664 978","id":"212eb8d7-e340-43ab-a4f5-b39993cdc64a","email":"jmason2@weather.com"},
        {"companyName":"VonRueden LLC","accountNumber":"PK78 QNNT EQWN KWPI 6VE3 ZMTF","id":"1d939765-699b-4300-bd22-c8609c3daf91","email":"tpatterson3@google.de"},
        {"companyName":"Turner Group","accountNumber":"NL69 WPGC 0810 2315 77","id":"a65be6c9-f15b-47f1-84e6-4a36ba5d342c","email":"nreed4@mayoclinic.com"},
        {"companyName":"Wunsch LLC","accountNumber":"TR26 4409 4WYW Y298 USQH XFPD 6I","id":"4ba8dac8-1c86-4842-8cea-3a4b35bbab08","email":"swells5@blog.com"},
        {"companyName":"Shields LLC","accountNumber":"CR96 0129 6245 5124 3415 9","id":"326b1f1c-3da8-4ae5-aa64-53352ed06df1","email":"jgonzales6@barnesandnoble.com"},
        {"companyName":"Stokes LLC","accountNumber":"SI55 7134 3290 9404 318","id":"d96e2665-1366-4b2e-bf70-4e31a4ea32a6","email":"wfox7@sogou.com"},
        {"companyName":"D'Amore, Bartell and Kassulke","accountNumber":"KZ02 680T BASZ VX4M ZPGQ","id":"eb4a180f-48bf-460c-8900-3bb387a63ab0","email":"slittle8@networkadvertising.org"},
        {"companyName":"Mertz-Murazik","accountNumber":"FR09 5126 6343 196F 7VWK VIDA G96","id":"51959b7c-aef4-4f4c-8723-64df15711e45","email":"jchavez9@livejournal.com"},
        {"companyName":"Johnson, Brown and Yost","accountNumber":"MD45 SVBP ORA2 QT02 0TKC K2J8","id":"95c234b3-28a3-4c3d-a4f7-cc1a5484068f","email":"bhamiltona@ucsd.edu"},
        {"companyName":"Parker Group","accountNumber":"NL38 VMVJ 8279 9808 79","id":"533df586-7db5-44dd-95a1-c072ad86498b","email":"gbennettb@ebay.co.uk"},
        {"companyName":"Reichert-Dietrich","accountNumber":"GB53 UPQZ 2929 8469 2084 82","id":"ab246670-d7f6-4bfe-b6d6-c9502dd544a8","email":"mstephensc@printfriendly.com"},
        {"companyName":"Koss Inc","accountNumber":"MT65 CSOW 0933 9HJF N68S XY1U DUTS TIW","id":"c8e13922-3ee0-4a00-9097-7729d5c0bca2","email":"cwoodsd@boston.com"},
        {"companyName":"Robel-Schamberger","accountNumber":"GR42 9311 1604 CTQD RKNI 5WDY GZT","id":"46201b92-a84c-41d8-b021-ffc8e3eb7317","email":"ewoodse@google.com.br"},
        {"companyName":"McCullough-Wuckert","accountNumber":"FR28 8910 2871 58WA A8BB FIP7 W69","id":"3e25e4e7-a924-4236-8a55-41c5facc04ce","email":"maustinf@ebay.co.uk"},
        {"companyName":"Schoen Group","accountNumber":"AD83 5460 5839 DLOV HCVZ UVGN","id":"7194dc0e-6424-42fb-a4dd-07ac19e55a5a","email":"vvasquezg@moonfruit.com"},
        {"companyName":"Robel Group","accountNumber":"CR55 2138 8499 1123 9528 3","id":"bdd33891-f35e-4677-84ae-e41c84aac906","email":"lpalmerh@toplist.cz"},
        {"companyName":"Osinski Group","accountNumber":"BA40 3816 2941 7503 0366","id":"cad1e8fe-0843-43e1-a4de-498076539a2f","email":"bbrooksi@ed.gov"},
        {"companyName":"Rogahn LLC","accountNumber":"DK24 2489 6562 1456 96","id":"89f3af17-14cb-4ab3-97cb-083560340e48","email":"mrichardsonj@examiner.com"},
        {"companyName":"Schneider LLC","accountNumber":"AL50 0809 6195 TPKO WUKX LYBS WK9O","id":"714d9f4b-7d94-4dd5-a547-cc447b76572d","email":"rgrahamk@google.com.au"},
        {"companyName":"Thiel-Wolff","accountNumber":"LU46 487L PJFS EUEM DWBB","id":"91d922ac-6e5d-4d2d-bf8d-470ecde631cc","email":"amoorel@google.pl"},
        {"companyName":"Klocko-Morissette","accountNumber":"DE98 2950 1475 1384 8332 59","id":"2198ec78-6e49-4009-8476-85908f22af3b","email":"scollinsm@redcross.org"},
        {"companyName":"Lang and Sons","accountNumber":"FO92 9851 3237 4481 79","id":"921a75be-d8c9-404d-9768-6a377a8f4ae0","email":"abanksn@cdc.gov"},
        {"companyName":"Shanahan, Kuhn and Dach","accountNumber":"IS75 2784 1832 1107 2594 7887 06","id":"13f033c8-2efd-471b-8bf3-aff46fb55bbe","email":"jbello@taobao.com"},
        {"companyName":"Hoeger Inc","accountNumber":"AE58 6081 9517 8466 8326 395","id":"ccafa40c-5b79-4699-8daf-4b775a048809","email":"eryanp@github.io"},
        {"companyName":"Stamm-Berge","accountNumber":"LT97 9487 9945 5964 0855","id":"d0777bec-1a52-4943-9690-43574c445952","email":"mhenryq@independent.co.uk"},
        {"companyName":"Jacobson LLC","accountNumber":"FR96 2204 9241 245A 1KLB W5GK V84","id":"7471b59d-a930-4f49-8180-56d0686acabf","email":"rsanchezr@hud.gov"},
        {"companyName":"Cremin, Farrell and Schamberger","accountNumber":"CR75 1654 3259 1325 0162 1","id":"23b8ff26-079d-4e3a-b8e1-246e02ff12d1","email":"dblacks@nydailynews.com"},
        {"companyName":"Ratke, Russel and Rippin","accountNumber":"FR31 6006 9483 81GD BJW6 KUX2 R57","id":"10ecf3e7-e6ee-4854-aa2e-a8d603406626","email":"mmillert@topsy.com"},
        {"companyName":"Senger, Kling and Robel","accountNumber":"CY12 1871 5800 KJZC MQNK 3XSN LY2I","id":"91827148-79b5-452b-9682-14f494588720","email":"kweaveru@state.gov"},
        {"companyName":"Little, Fay and Littel","accountNumber":"BH02 MAZS TUTX SPUA CQ0Q IA","id":"b1c95a8b-6637-4a02-a03d-2d877f89e801","email":"lmarshallv@w3.org"},
        {"companyName":"Weimann LLC","accountNumber":"FR62 4140 1117 14BD KS93 Z4DY T72","id":"36ac519b-5b91-4510-a7f7-2fd86f1c84cf","email":"dwilliamsw@statcounter.com"},
        {"companyName":"Rosenbaum-Reilly","accountNumber":"FR29 9781 0626 68YE ATXL AUZX A02","id":"349623e0-c70e-4f4a-81b0-fe97493c1004","email":"dromerox@deliciousdays.com"},
        {"companyName":"Schulist, Cummerata and Stark","accountNumber":"MD35 JBJS 3B24 KMJZ EQBC P2L5","id":"442f0418-616c-468c-a675-82c48c6a85d2","email":"wmitchelly@indiatimes.com"},
        {"companyName":"Labadie, Berge and Nitzsche","accountNumber":"TN58 9199 1295 1298 8485 6860","id":"24a10110-196c-4e5a-800d-e9c2840d8f11","email":"cwillisz@posterous.com"},
        {"companyName":"Thiel, Lubowitz and Steuber","accountNumber":"PT93 7074 3585 3013 0626 2982 4","id":"757efd3c-c5b0-4354-a1c2-7b720438c40c","email":"cgarza10@paginegialle.it"},
        {"companyName":"Denesik Group","accountNumber":"FR67 3927 8003 17A8 NGLX N9IN V34","id":"0fefdb3b-623c-4ab7-b18a-1aa1d13153a2","email":"ksanders11@engadget.com"},
        {"companyName":"Quigley-Connelly","accountNumber":"DE16 7623 6589 6140 4180 73","id":"d6232f9e-8238-4fad-a9b3-d1f7b3b414cc","email":"randerson12@ca.gov"},
        {"companyName":"Bode, Powlowski and Crist","accountNumber":"EE11 7981 1234 7093 7516","id":"eecdfb64-347d-47e0-9c8c-472f2e0633ae","email":"nholmes13@clickbank.net"},
        {"companyName":"Zieme Group","accountNumber":"SI93 3362 4713 5070 208","id":"74f2a333-dc6b-49d8-9d42-621311e892b4","email":"hwilliamson14@dell.com"},
        {"companyName":"Howell, Feil and Cole","accountNumber":"LT23 2439 3445 1074 1172","id":"387287f1-1ca0-4df1-bbab-a89e1fe5589b","email":"hvasquez15@disqus.com"},
        {"companyName":"Parisian Inc","accountNumber":"GE37 SF47 9252 2109 5152 75","id":"f85935d8-9145-4490-b61f-3599f4250273","email":"khughes16@narod.ru"},
        {"companyName":"Windler, Steuber and Weimann","accountNumber":"VG81 PAAZ 6939 1423 0151 2412","id":"aee2c3fb-f5ad-4c05-94a1-53e3cf56397f","email":"tandrews17@etsy.com"},
        {"companyName":"Brakus Group","accountNumber":"AE02 4483 3368 7994 4390 087","id":"257e34a2-5fbe-4315-8140-2c385525db87","email":"khanson18@amazon.de"},
        {"companyName":"Nader and Sons","accountNumber":"AT68 1544 6823 2068 9934","id":"d4330e6d-2a40-4419-82d5-76aa466b1514","email":"lwelch19@icq.com"},
        {"companyName":"Kuhic, Brakus and Rau","accountNumber":"SE49 7126 3863 9030 4260 8125","id":"413bc218-3aa7-40af-ba37-fe25314b7620","email":"rmatthews1a@tamu.edu"},
        {"companyName":"Langworth, Dooley and Nicolas","accountNumber":"LB83 8665 LZJF YZLS W4YD X0I1 REBU","id":"078a7a5a-ac6e-40e4-891e-3375de2cc931","email":"sbennett1b@wikispaces.com"},
        {"companyName":"Kertzmann and Sons","accountNumber":"DE62 0488 3729 1890 2853 48","id":"07e79298-7530-4d03-911e-fc2e0148f57e","email":"jadams1c@telegraph.co.uk"},
        {"companyName":"Toy-Mann","accountNumber":"ES77 2884 7115 0472 3496 6063","id":"79f91d5b-51d4-4516-a6b6-6257e12a200c","email":"awillis1d@bloomberg.com"}
      ]
    }
  },

  listeners: {
    'autocomplete-selected': '_onOptionSelected'
  },

  ready: function () {
    var autocomplete = this.$$('paper-autocomplete');
    autocomplete.addEventListener('autocomplete-selected', this.onSelect);

    // Override default queryFn with our custom. This is a needed requirement to implement the custom template
    autocomplete.queryFn = this._queryFn;
  },

  _onOptionSelected: function (event) {
    var paperToast = document.querySelector('paper-toast');
    var selected = event.detail.text;
    paperToast.text = 'Selected: ' + selected;
    paperToast.show();
  },

  // This custom queryFn will filter results searching in both companyName and accountNumber, then it will return the
  // whole data object so it can be accessed in the custom template
  _queryFn: function (datasource, query) {
    return datasource.filter(function (item) {
      return (
        item.companyName.toLowerCase().indexOf(query) != -1 || item.accountNumber.toLowerCase().indexOf(query) != -1
      );
    });
  }
});
