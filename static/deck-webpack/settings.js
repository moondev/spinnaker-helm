webpackJsonp([1,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var feedbackUrl = process.env.FEEDBACK_URL;
	var gateHost = "/gate";
	var bakeryHost = '/bakery';
	//var bakeryDetailUrl = "/bakery" + '/#/?region={{context.region}}&package={{context.package}}&detail=bake:{{context.status.resourceId}}';
  var bakeryDetailUrl = "/bakery/api/v1/global/logs/{{context.status.resourceId}}?html=true";
	var authEndpoint = process.env.AUTH_ENDPOINT || gateHost + '/auth/user';
	var authEnabled =  false;
	var netflixMode = false;
	var chaosEnabled = true;
	var fiatEnabled = false;
	var entityTagsEnabled = process.env.ENTITY_TAGS_ENABLED == 'true' ? true : false;

	window.spinnakerSettings = {
	  checkForUpdates: false,
	  defaultProviders: ['aws', 'gce', 'azure', 'cf', 'kubernetes', 'titus', 'openstack'],
	  feedbackUrl: feedbackUrl,
	  gateUrl: gateHost,
	  bakeryDetailUrl: bakeryDetailUrl,
	  authEndpoint: authEndpoint,
	  pollSchedule: 30000,
	  defaultTimeZone: process.env.TIMEZONE || 'America/Los_Angeles', // see http://momentjs.com/timezone/docs/#/data-utilities/
	  defaultCategory: 'serverGroup',
	  defaultInstancePort: 80,
	  providers: {
	    azure: {
	      defaults: {
	        account: 'azure-test',
	        region: 'westus'
	      }
	    },
	    aws: {
	      defaults: {
	        account: 'test',
	        region: 'us-east-1',
	        iamRole: 'BaseIAMRole'
	      },
	      defaultSecurityGroups: [],
	      loadBalancers: {
	        // if true, VPC load balancers will be created as internal load balancers if the selected subnet has a purpose
	        // tag that starts with "internal"
	        inferInternalFlagFromSubnet: false
	      },
	      useAmiBlockDeviceMappings: false
	    },
	    gce: {
	      defaults: {
	        account: 'my-google-account',
	        region: 'us-central1',
	        zone: 'us-central1-f'
	      }
	    },
	    titus: {
	      defaults: {
	        account: 'titustestvpc',
	        region: 'us-east-1',
	        iamProfile: '{{application}}InstanceProfile'
	      }
	    },
	    openstack: {
	      defaults: {
	        account: 'test',
	        region: 'us-west-1'
	      }
	    },
	    kubernetes: {
	      defaults: {
	        account: 'kubernetes',
	        namespace: 'default'
	      }
	    },
	    appengine: {
	      defaults: {
	        account: 'my-appengine-account'
	      }
	    }
	  },
	  whatsNew: {
	    gistId: '32526cd608db3d811b38',
	    fileName: 'news.md'
	  },
	  notifications: {
	    email: {
	      enabled: true
	    },
	    hipchat: {
	      enabled: true,
	      botName: 'Skynet T-800'
	    },
	    sms: {
	      enabled: true
	    },
	    slack: {
	      enabled: true,
	      botName: 'spinnakerbot'
	    }
	  },
	  authEnabled: false,
	  authTtl: 600000,
	  gitSources: ['stash', 'github'],
	  triggerTypes: ['git', 'pipeline', 'docker', 'cron', 'jenkins'],
	  feature: {
	    entityTags: entityTagsEnabled,
	    fiatEnabled: false,
	    pipelines: true,
	    notifications: true,
	    fastProperty: true,
	    vpcMigrator: true,
	    clusterDiff: false,
	    roscoMode: true,
	    netflixMode: false,
	    chaosMonkey: chaosEnabled,
      dockerBake: true,
	    // whether stages affecting infrastructure (like "Create Load Balancer") should be enabled or not
	    infrastructureStages: process.env.INFRA_STAGES === 'enabled',
	    jobs: true,
	    snapshots: false
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(570)))

/***/ }
]);