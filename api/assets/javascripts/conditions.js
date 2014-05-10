// exports.TemperatureConditions = [{
// 	high: 200,
// 	low: 99,
// 	status: 'too hot is click here to get a/c serviced',
// 	priority: 10
// }, {
// 	high: 98,
// 	low: 85,
// 	status: 'toohot',
// 	priority: 9
// }, {
// 	high: 32,
// 	low: -100,
// 	status: 'freezing',
// 	priority: 8
// }];
//
// exports.PrecipitationConditions = [{
// 	high: 100,
// 	low: 70,
// 	type: 'rain',
// 	status: 'heavyrain',
// 	priority: 8
// }, {
// 	high: 100,
// 	low: 70,
// 	type: 'snow',
// 	status: 'heavysnow',
// 	priority: 9
// }, {
// 	high: 100,
// 	low: 70,
// 	type: 'sleet',
// 	status: 'heavysnow',
// 	priority: 9
// }, {
// 	high: 100,
// 	low: 70,
// 	type: 'hail',
// 	status: 'heavyrain',
// 	priority: 9
// }];
//
// exports.WindConditions = [{
// 	high: 140,
// 	low: 30,
// 	status: 'highwind',
// 	priority: 10
// }];
//
// exports.SeasonalConditions = [{
// 	month: 1,
// 	status: 'winter',
// 	priority: 1
// }, {
// 	month: 3,
// 	status: 'allergy',
// 	priority: 1
// }, {
// 	month: 4,
// 	status: 'allergy',
// 	priority: 1
// }, {
// 	month: 12,
// 	status: 'winter',
// 	priority: 1
// }];
//
// exports.Statuses = [{
// 	status: 'toohot',
// 	message: "It's too hot! Click here",
// 	url: 'http://www.angieslist.com',
// 	sps: ['Valley Heating, Cooling and Eletrical']
// }, {
// 	status: 'freezing',
// 	message: "It's freezing out!",
// 	url: 'http://www.angieslist.com',
// 	sps: ['AAA Furnace & Air Conditioning Co']
// }, {
// 	status: 'heavyrain',
// 	message: "There's a storm coming!",
// 	url: 'http://www.angieslist.com',
// 	sps: ['Westshore Roofing Inc', 'All About Gutters']
// }, {
// 	status: 'heavysnow',
// 	message: "There's a snow storm on the way!",
// 	url: 'http://www.angieslist.com',
// 	sps: ['Tip Top Roofing', 'Pelle Heating & Air Conditioning']
// }, {
// 	status: 'highwind',
// 	message: "High wind incoming!",
// 	url: 'http://www.angieslist.com',
// 	sps: ['Carlos Tree Service', 'American Vision Windows']
// }, {
// 	status: 'winter',
// 	message: "Winter is coming.",
// 	url: 'http://www.angieslist.com',
// 	sps: ['DunRite Heating & Air Inc.']
// }, {
// 	status: 'allergy',
// 	message: "The allergy season is starting.",
// 	url: 'http://www.angieslist.com',
// 	sps: ['Indoor-Restore Environmental Services', 'Allergy & Asthma Associates']
// }, {
// 	status: 'default',
// 	message: "Nice day today!",
// 	url: 'http://www.angieslist.com',
// 	sps: ['Precision Automotive Service Inc', 'American Kitchen And Bath Inc']
// }];
//
//
//
//



exports.TemperatureConditions = [{
  high: 100,
  low: 99,
  status: 'toohot',
  priority: 10,
}, {
  high: 98,
  low: 85,
  status: 'toohot',
  priority: 9
}, {
  high: 32,
  low: -10,
  status: 'freezing',
  priority: 8
},
{
  high: 32,
  low: -10,
  status: 'heavysnow',
  priority: 8
}
];

exports.PrecipitationConditions = [{
  high: 100,
  low: 70,
  type: 'rain',
  status: 'heavyrain',
  priority: 8
}, {
  high: 100,
  low: 70,
  type: 'snow',
  status: 'heavysnow',
  priority: 9
}, {
  high: 100,
  low: 70,
  type: 'sleet',
  status: 'heavysnow',
  priority: 9
}, {
  high: 100,
  low: 70,
  type: 'hail',
  status: 'heavyrain',
  priority: 9
}];

exports.WindConditions = [{
  high: 140,
  low: 30,
  status: 'highwind',
  priority: 10
}];

exports.SeasonalConditions = [{
  month: 1,
  status: 'january',
  priority: 1
},
{
	month: 3,
	status: 'february',
	priority: 1
},
 {
	month: 3,
	status: 'march',
	priority: 1
	}, {
	month: 4,
	status: 'april',
	priority: 1
	},
{
	month: 5,
	status: 'may',
	priority: 1
},
{
	month: 6,
	status: 'june',
	priority: 1
},
{
	month: 7,
	status: 'july',
	priority: 1
},
{
	month: 8,
	status: 'august',
	priority: 1
},
{
	month: 9,
	status: 'september',
	priority: 1
},
{
	month: 10,
	status: 'october',
	priority: 1
},
{
	month: 11,
	status: 'november',
	priority: 1
},
{
	month: 12,
	status: 'december',
	priority: 1
}];

exports.Statuses = [{
	status: 'toohot',
	message: "It's getting hot, click here to for best A/C inspection service",
	url: 'http://my.angieslist.com/thebigdeal/default.aspx?itemid=QtHptG1ORNu7JFo4%2f1or4Q%3d%3d&source=19',
	sps: ['Valley Heating, Cooling and Eletrical']
}, {
	status: 'freezing',
	message: 'It\'s freezing out!, click here to get your furnace inspected',
	url:'http://my.angieslist.com/thebigdeal/default.aspx?itemid=9VcPPaGl5Ac4kELBbSjA5A%3d%3d&source=19',
	sps: ['AAA Furnace & Air Conditioning Co']
}, {
  status: 'heavyrain',
  message: 'There\'s a rain coming!, click here to get your roof inspected',
  url: 'http://deals.angieslist.com/deal/199-for-two-hour-roof-maintenance-and-small-roof-repairs.htm?storefrontitemid=E72NJQOKVgES38o6HHt27Q%3D%3D&amp;source=7&amp;catid=112&amp;st=&amp;d=1&amp;k=roof&amp;l=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;o=0&amp;s=0&amp;r=16&amp;ls=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;v=16165158&amp;y=7816e62fd26d3c08&amp;z=755e31149164cfc5&amp;i=2&amp;g=a&amp;w=71',
  sps: ['Westshore Roofing Inc', 'All About Gutters']
}, {
  status: 'heavysnow',
  message: "There's a snow storm on the way!",
  url: 'http://my.angieslist.com/thebigdeal/default.aspx?itemid=9VcPPaGl5Ac4kELBbSjA5A%3d%3d&source=19',
  sps: ['Tip Top Roofing', 'Pelle Heating & Air Conditioning']
}, {
  status: 'highwind',
  message: "High wind incoming!",
  url: 'http://deals.angieslist.com/deal/800-for-1-000-worth-of-tree-service.htm?storefrontitemid=t%2FJeRnWHVGGUlAbhlDKhZA%3D%3D&source=7&catid=126&st=&d=1&k=trees&l=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&o=0&s=0&r=16&ls=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&v=16165158&y=307af927fad304cc&z=78f9221b99fea817&i=7&g=a&w=128',
  sps: ['Carlos Tree Service', 'American Vision Windows']
}, {
  status: 'winter',
  message: "Winter is coming, here is the first step to inspect your plumbing.",
  url: 'http://deals.angieslist.com/deal/44-furnace-inspection-cleaning-tune-up.htm?storefrontitemid=8l5kV8e%2Bq8Mtjr%2BRba%2F%2BMg%3D%3D&source=7&catid=78&st=&d=1&k=hvac+installation+repairing&l=1030+E+WASHINGTON%2C+Indianapolis%2C+IN%2C+46202&o=0&s=0&r=16&ls=1030+E+WASHINGTON%2C+Indianapolis%2C+IN%2C+46202&v=11638909&y=4974e21c9574a8ed&z=7a28e2e351e37d9&i=1&g=a&w=1192',
  sps: ['DunRite Heating & Air Inc.']
}, {
  status: 'storm',
  message: "Is your home prepared for the storm click here to get started.",
  url: 'http://deals.angieslist.com/deal/800-for-1-000-worth-of-tree-service.htm?storefrontitemid=t%2FJeRnWHVGGUlAbhlDKhZA%3D%3D&source=7&catid=126&st=&d=1&k=trees&l=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&o=0&s=0&r=16&ls=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&v=16165158&y=307af927fad304cc&z=78f9221b99fea817&i=7&g=a&w=128',
  sps: ['Indoor-Restore Environmental Services', 'Allergy & Asthma Associates']
}, {
  status: 'storm',
  message: "The allergy season is starting. Click here to find a great deal on carpet cleaning",
  url: 'http://deals.angieslist.com/deal/159-for-eco-friendly-carpet-cleaning-deodorizing-sanitizing-and-spot-removal.htm?storefrontitemid=xaFEGoO%2FNh4MSG1T2BWzuQ%3D%3D&source=7&catid=36&st=&d=1&k=carpet+cleaning+allergy&l=1030+E+WASHINGTON%2C+Indianapolis%2C+IN%2C+46202&o=0&s=0&r=16&ls=1030+E+WASHINGTON%2C+Indianapolis%2C+IN%2C+46202&v=11638909&y=3922a3ade3d3a55d&z=5f645454c06206a7&i=0&g=a&w=28',
  sps: ['Indoor-Restore Environmental Services', 'Allergy & Asthma Associates']
}, {
  status: 'default',
  message: "Nice day today!",
  url: 'http://deals.angieslist.com/deal/199-for-two-hour-roof-maintenance-and-small-roof-repairs.htm?storefrontitemid=E72NJQOKVgES38o6HHt27Q%3D%3D&amp;source=7&amp;catid=112&amp;st=&amp;d=1&amp;k=roof&amp;l=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;o=0&amp;s=0&amp;r=16&amp;ls=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;v=16165158&amp;y=7816e62fd26d3c08&amp;z=755e31149164cfc5&amp;i=2&amp;g=a&amp;w=71',
  sps: ['Precision Automotive Service Inc', 'American Kitchen And Bath Inc']
}, {
  status: 'january',
  message: "January is the most coldest month of the year. Click here to Eliminate Squeaks and Creaks",
  url: 'http://deals.angieslist.com/deal/199-for-two-hour-roof-maintenance-and-small-roof-repairs.htm?storefrontitemid=E72NJQOKVgES38o6HHt27Q%3D%3D&amp;source=7&amp;catid=112&amp;st=&amp;d=1&amp;k=roof&amp;l=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;o=0&amp;s=0&amp;r=16&amp;ls=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;v=16165158&amp;y=7816e62fd26d3c08&amp;z=755e31149164cfc5&amp;i=2&amp;g=a&amp;w=71',
  sps: ['Precision Automotive Service Inc', 'American Kitchen And Bath Inc']
}, {
  status: 'february',
  message: "February is the most coldest month of the year. Click here to Eliminate Squeaks and Creaks",
  url: 'http://deals.angieslist.com/deal/199-for-two-hour-roof-maintenance-and-small-roof-repairs.htm?storefrontitemid=E72NJQOKVgES38o6HHt27Q%3D%3D&amp;source=7&amp;catid=112&amp;st=&amp;d=1&amp;k=roof&amp;l=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;o=0&amp;s=0&amp;r=16&amp;ls=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;v=16165158&amp;y=7816e62fd26d3c08&amp;z=755e31149164cfc5&amp;i=2&amp;g=a&amp;w=71',
  sps: ['Precision Automotive Service Inc', 'American Kitchen And Bath Inc']
}, {
  status: 'march',
  message: "Is your hoe prepared for spring. Click here to Eliminate Squeaks and Creaks",
  url: 'http://deals.angieslist.com/deal/199-for-two-hour-roof-maintenance-and-small-roof-repairs.htm?storefrontitemid=E72NJQOKVgES38o6HHt27Q%3D%3D&amp;source=7&amp;catid=112&amp;st=&amp;d=1&amp;k=roof&amp;l=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;o=0&amp;s=0&amp;r=16&amp;ls=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;v=16165158&amp;y=7816e62fd26d3c08&amp;z=755e31149164cfc5&amp;i=2&amp;g=a&amp;w=71',
  sps: ['Precision Automotive Service Inc', 'American Kitchen And Bath Inc']
}, {
  status: 'april',
  message: "Is your hoe prepared for spring. Click here to Eliminate Squeaks and Creaks",
  url: 'http://deals.angieslist.com/deal/199-for-two-hour-roof-maintenance-and-small-roof-repairs.htm?storefrontitemid=E72NJQOKVgES38o6HHt27Q%3D%3D&amp;source=7&amp;catid=112&amp;st=&amp;d=1&amp;k=roof&amp;l=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;o=0&amp;s=0&amp;r=16&amp;ls=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&amp;v=16165158&amp;y=7816e62fd26d3c08&amp;z=755e31149164cfc5&amp;i=2&amp;g=a&amp;w=71',
  sps: ['Precision Automotive Service Inc', 'American Kitchen And Bath Inc']
}, {
  status: 'may',
  message: "Its May. Click here for nstalling shades to your house before its gets too hot",
  url: 'http://deals.angieslist.com/deal/49-for-a-2-d-computer-designed-deck-or-patio-shade-system-and-500-credit.htm?storefrontitemid=tf%2BymrnZdXX3qaoRoXep%2Fg%3D%3D&source=7&catid=25&st=&d=1&k=shades&l=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&o=0&s=0&r=16&ls=1+Monument+way%2C+Indianapolis%2C+IN%2C+46202&v=16165158&y=4cb5ce7c7942f9cc&z=3c2e9a47bb43cee7&i=1&g=a&w=19',
  sps: ['Precision Automotive Service Inc', 'American Kitchen And Bath Inc']
}];
