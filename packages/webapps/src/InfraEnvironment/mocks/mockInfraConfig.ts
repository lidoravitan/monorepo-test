export const mockInfraConfig = (window) => {
  window.__APP_NAME__ = 'app'
  window.__VERSION__ = '1'

  window.dlxng_config = {
    // eslint-disable-line
    'activitystream.pushingInterval': 5000 /* Number of milliseconds between each subsequent push to the activity stream (client-side events written on server-side log) */,
    'activitystream.running':
      false /* Boolean indicating if the client-side should push events to server-side log */,
    'branding.redirectButtonHref':
      '/webapps/view/redirect2OG' /* The url to redirect the user to eXchange OG */,
    'chartbeat.running':
      false /* Boolean indicating whether chartbeat statistics will be gathered */,
    'dashboard.labelTags.maXPercent': 90 /* The percentage (0-100) the fill will take out of the entire bar for the label tag with the maximum unique users */,
    'googleanalytics.running':
      true /* Boolean indicating whether Google Analytics statistics will be gathered */,
    'labelsets.numberOfItemsPerPage': 4 /* Number of items per page in label sets selection */,
    'login.exelateWebsiteLink':
      'http://www.exelate.com/' /* URL to eXelate's web site */,
    'login.privacyLink':
      'http://exelate.com/consumer-opt-out/services-privacy-policy/' /* URL to eXelate's services privacy policy */,
    'maxIndexReport.indexReport.renderingWinSize': 100 /* the number of circles rendered each time */,
    'maxIndexReport.indexReport.maxCircleOnRuler': 500 /* number of circles to display on index report ruler */,
    'maxIndexReport.indexReport.charsForCirclesTextLineBreak': 30 /* number characters after which the circles text is separated to a new line */,
    'maxIndexReport.indexReport.maxTickNumOnRulerAxis': 6 /* max number of ticks to generate on index report ruler axis */,
    'maxIndexReport.mapBox.minMarkerRadius': 3 /* number of pixels for the minimum marker radius in maX index report's mapbox chart */,
    'maxIndexReport.mapBox.maxMarkerRadius': 30 /* number of pixels for the maximum marker radius in maX index report's mapbox chart */,
    'maxIndexReport.loaderTimeout': 1500 /* Number of millisconds that the loader of the index report is showing */,
    'maxIndexReport.player.timeInterval': 1000 /* Number of milliseconds between two adjacent days when the player is on */,
    'maxIndexReport.player.loop':
      true /* Should the maX index report player loop from start when its range is over */,
    'notifications.maxNumberOfVisibleAtOnce': 5 /* Maximum number of visible notifications shown at once */,
    'notifications.pollingInterval': 7000 /* Number of milliseconds between each subsequent pull of notifications from server side to client side */,
    'notifications.running':
      false /* Boolean indicating whether client side pulls notifications */,
    'profile.nielsen.sprite.css':
      'https://datalinx.s3.amazonaws.com/production/NG/spritesheets/nielsen_spritesheet.css' /* The sprite css of Profile's Nielsen's segments' icons */,
    'profile.nielsen.sprite.prizm_prefix':
      'nielsenprizm-' /* The prefix of css classes of Prizm's segments' icons in the spritesheet */,
    'profile.nielsen.sprite.psycle_prefix':
      'nielsenpsycle_' /* The prefix of css classes of Psycle's segments' icons in the spritesheet */,
    'profile.nielsen.sprite.connexions_prefix':
      'nielsenconnexions_' /* The prefix of css classes of Connexions' segments' icons in the spritesheet */,
    'profile.tv.sprite.image':
      'https://datalinx.s3.amazonaws.com/production/NG/spritesheets/tv_spritesheet.png' /* The sprite image of tv segments' icons */,
    'profile.tv.sprite.css':
      'https://datalinx.s3.amazonaws.com/production/NG/spritesheets/tv_spritesheet.css' /* The sprite css of tv segments' icons */,
    'profile.checkUUTimeout': 10000,
    'profile.fetchDataTimeout': 25000,
    'responsiveness.loadingSignTimeout': 2000 /* Number of milliseconds till the loading sign shows up when doing a long operation */,
    'session.pollingInterval': 5000 /* Number of milliseconds between each subsequent test for session expiry */,
    'session.pollingRunning':
      true /* Boolean indicating if the session expirty tests should be running */,
    'ui.version': '32516' /* The version tag to show at optiX UI footer */,
    init_data: {
      user: {
        userName: 'xoptix@exelate.com',
        firstName: 'Visionary',
        lastName: 'Marketer',
        email: 'xoptix@exelate.com',
        entityCode: 1159,
        activeIndication: true,
        displayVersionName: 'T4B',
        lastLogin: null,
        roles: [
          {
            roleCode: 17,
            roleName: 'EXCHANGE_OPTIX',
            roleDescription: 'Primary: eXchange ; Secondary: optiX',
            scopeType: 3,
            displayVersionName: 'T4T',
            timeout: 3600,
            entityType: 3,
          },
        ],
        entities: [
          {
            entityCode: 1159,
            entityType: 3,
            entityName: 'Visionary Marketer',
            parentCode: null,
            platformCode: null,
            pmpIndicator: false,
            displayCode: 'XVM',
            typeDisplayName: null,
            entityId: 0,
            categoryCode: null,
            logoName: null,
            currencyCode: null,
            displayVersionName: null,
            pricingTypeCode: null,
            apiAccessIndicator: false,
            appAccessIndicator: false,
            defaultRoleCode: 0,
            default: false,
          },
        ],
      },
      menu: [
        {
          id: 1,
          text: 'dashboard',
          dropdown: [
            {
              id: 2,
              text: 'dashboard',
              action: 'NG-DASHBOARD',
              brand: 'exchange',
            },
          ],
        },
        {
          id: 5,
          text: 'planner',
          dropdown: [
            {
              id: 6,
              text: 'planner',
              action: 'NG-AUDIENCEIND',
              brand: 'exchange',
            },
          ],
        },
        {
          id: 3,
          text: 'profile',
          dropdown: [
            { id: 4, text: 'profile', action: 'NG-PROFILE', brand: 'optix' },
          ],
        },
      ],
      menus: [],
      screens: [],
      apps: [],
      brandingMap: {
        'NG-DASHBOARD': 'exchange',
        'NG-AUDIENCEIND': 'exchange',
        'NG-PROFILE': 'optix',
      },
      uiPermissions: [
        {
          id: 3,
          name: 'INFRA-GLOBAL-REBRAND-LOGIN-EXCHANGE',
          description:
            'enable the user to log in using exchange.exelate.com login screen',
        },
        {
          id: 4,
          name: 'INFRA-GLOBAL-REBRAND-LOGIN-OPTIX',
          description:
            'enable the user to log in using optix.exelate.com login screen',
        },
      ],
      'api.version': '3.201311-01.29.0',
    },
    query_string: {
      creationTime: new Date(),
      nonce: 'foo',
      user: 'lidor&matan@exelate.com',
      token: '123456789',
    },
    hasUiPermission: function hasUiPermission() {
      return null
    },
  }
}
