"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by codelovesme on 6/19/2015.
 *
 *
 * TODO list
 * * ReadParticle, ReamoveParticle must take query:any instead of AnyParticle
 *      SaveParticle must be the same with the Cytoplasm saveParticle
 *
 */
var core_1 = require("@euglena/core");
var cessnalib_1 = require("cessnalib");
var BooleanParticle = /** @class */ (function (_super) {
    __extends(BooleanParticle, _super);
    function BooleanParticle(meta, data) {
        return _super.call(this, meta, data) || this;
    }
    return BooleanParticle;
}(core_1.ParticleV2));
exports.BooleanParticle = BooleanParticle;
var VoidParticle = /** @class */ (function (_super) {
    __extends(VoidParticle, _super);
    function VoidParticle(meta) {
        return _super.call(this, meta) || this;
    }
    return VoidParticle;
}(core_1.ParticleV2));
exports.VoidParticle = VoidParticle;
var subscription;
(function (subscription) {
    var Record = /** @class */ (function () {
        function Record() {
        }
        return Record;
    }());
    subscription.Record = Record;
    var StaticTools = /** @class */ (function () {
        function StaticTools() {
        }
        StaticTools.addSubscription = function (particleMatch, euglenaName) {
            var euglenas = StaticTools.getSubscriptions(particleMatch);
            if (euglenas) {
                if (!cessnalib_1.sys.type.StaticTools.Array.contains(euglenas, euglenaName)) {
                    euglenas.push(euglenaName);
                }
            }
            else {
                StaticTools.subscriptionDict.push({ particle: particleMatch, euglenas: [euglenaName] });
            }
        };
        StaticTools.removeSubscriptions = function (particleMatch) {
            for (var i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (cessnalib_1.js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    return cessnalib_1.sys.type.StaticTools.Array.removeAt(StaticTools.subscriptionDict, i).euglenas;
                }
            }
            return null;
        };
        StaticTools.removeSubscription = function (particleMatch, euglenaName) {
            for (var i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (cessnalib_1.js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    var index = StaticTools.subscriptionDict[i].euglenas.indexOf(euglenaName);
                    if (index >= 0) {
                        return cessnalib_1.sys.type.StaticTools.Array.removeAt(StaticTools.subscriptionDict[i].euglenas, index) ? true : false;
                    }
                }
            }
            return false;
        };
        StaticTools.getSubscriptions = function (particleMatch) {
            for (var i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (cessnalib_1.js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    return StaticTools.subscriptionDict[i].euglenas;
                }
            }
            return null;
        };
        StaticTools.isSubscribed = function (particleMatch, euglenaName) {
            for (var i = 0; i < StaticTools.subscriptionDict.length; i++) {
                if (cessnalib_1.js.Class.doesCover(particleMatch, StaticTools.subscriptionDict[i].particle)) {
                    return cessnalib_1.sys.type.StaticTools.Array.contains(StaticTools.subscriptionDict[i].euglenas, euglenaName);
                }
            }
        };
        StaticTools.subscriptionDict = [];
        return StaticTools;
    }());
    subscription.StaticTools = StaticTools;
})(subscription = exports.subscription || (exports.subscription = {}));
var alive;
(function (alive) {
    var constants;
    (function (constants) {
        var particles;
        (function (particles) {
            particles.Domain = "Domain";
            particles.ServerRunning = "ServerRunning";
            particles.WhoAmI = "WhoAmI";
            particles.Particles = "Particles";
            particles.EuglenaInfo = "EuglenaInfo";
            particles.OrganelleInfo = "OrganelleInfo";
            particles.OrganelleList = "OrganelleList";
            particles.EuglenaName = "EuglenaName";
            particles.EuglenaHasBeenBorn = "EuglenaHasBeenBorn";
            particles.Acknowledge = "Acknowledge";
            particles.Authenticate = "Authenticate";
            particles.Time = "Time";
            particles.Exception = "Exception";
            particles.ConnectedToTheInternet = "ConnectedToTheInternet";
            particles.Token = "Token";
            particles.Impacts = "Impacts";
            particles.Impact = "Impact";
            particles.DoesParticleExist = "DoesParticleExist";
            particles.DoesUniqueParticleExist = "DoesUniqueParticleExist";
            particles.Gene = "Gene";
            particles.ThrowImpact = "ThrowImpact";
            particles.Listen = "Listen";
            particles.ConnectedToEuglena = "ConnectedToEuglena";
            particles.DisconnectedFromEuglena = "DisconnectedFromEuglena";
            particles.ConnectToEuglena = "ConnectToEuglena";
            particles.ReturnCurrentTime = "ReturnCurrentTime";
            particles.ReturnIfConnectedToTheInternet = "ReturnIfConnectedToTheInternet";
            particles.OrganelleHasComeToLife = "OrganelleHasComeToLife";
            particles.Proxy = "Proxy";
            particles.Coordinate = "Coordinate";
            particles.SetTime = "SetTime";
            particles.DbIsOnline = "DbIsOnline";
            particles.NetOrganelleSap = "NetOrganelleSap";
            particles.NetClientOrganelleSap = "NetClientOrganelleSap";
            particles.TimeOrganelleSap = "TimeOrganelleSap";
            particles.WebOrganelleSap = "WebOrganelleSap";
            particles.GPSOrganelleSap = "GPSOrganelleSap";
            particles.WebUIOrganelleSap = "WebUIOrganelleSap";
            particles.DbOrganelleSap = "DbOrganelleSap";
            particles.CytoplasmInfo = "CytoplasmInfo";
            particles.ReadParticles = "ReadParticles";
            particles.Subscribe = "Subscribe";
            particles.subscriptionDict = "subscriptionDict";
            particles.Password = "Password";
            particles.AddGene = "AddGene";
            particles.TimeChanged = "TimeChanged";
            particles.ExceptionOccurred = "ExceptionOccurred";
            particles.SaveParticle = "SaveParticle";
            particles.RenameParticle = "RenameParticle";
            particles.SaveMatchedParticle = "SaveMatchedParticle";
            particles.ReadParticle = "ReadParticle";
            particles.RemoveParticle = "RemoveParticle";
            particles.RemoveParticles = "RemoveParticles";
            particles.Api = "Api";
            particles.IAmReady = "IAmReady";
            particles.OrganelleReady = "OrganelleReady";
        })(particles = constants.particles || (constants.particles = {}));
        var organelles;
        (function (organelles) {
            organelles.WebUIOrganelle = "WebUIOrganelle";
            organelles.GPSOrganelle = "GPSOrganelle";
            organelles.NetOrganelle = "NetOrganelle";
            organelles.TimeOrganelle = "TimeOrganelle";
            organelles.WebOrganelle = "WebOrganelle";
            organelles.DbOrganelle = "DbOrganelle";
            organelles.NetClientOrganelle = "NetClientOrganelle";
            organelles.Cytoplasm = "Cytoplasm";
        })(organelles = constants.organelles || (constants.organelles = {}));
    })(constants = alive.constants || (alive.constants = {}));
    var organelle;
    (function (organelle) {
        var Organelle = core_1.alive.Organelle;
        var TimeOrganelle = /** @class */ (function (_super) {
            __extends(TimeOrganelle, _super);
            function TimeOrganelle() {
                return _super.call(this, alive.constants.organelles.TimeOrganelle) || this;
            }
            return TimeOrganelle;
        }(Organelle));
        organelle.TimeOrganelle = TimeOrganelle;
        var NetOrganelle = /** @class */ (function (_super) {
            __extends(NetOrganelle, _super);
            function NetOrganelle() {
                return _super.call(this, constants.organelles.NetOrganelle) || this;
            }
            return NetOrganelle;
        }(Organelle));
        organelle.NetOrganelle = NetOrganelle;
        var WebOrganelle = /** @class */ (function (_super) {
            __extends(WebOrganelle, _super);
            function WebOrganelle() {
                return _super.call(this, constants.organelles.WebOrganelle) || this;
            }
            return WebOrganelle;
        }(Organelle));
        organelle.WebOrganelle = WebOrganelle;
        var WebUIOrganelle = /** @class */ (function (_super) {
            __extends(WebUIOrganelle, _super);
            function WebUIOrganelle() {
                return _super.call(this, constants.organelles.WebUIOrganelle) || this;
            }
            return WebUIOrganelle;
        }(Organelle));
        organelle.WebUIOrganelle = WebUIOrganelle;
        var DbOrganelle = /** @class */ (function (_super) {
            __extends(DbOrganelle, _super);
            function DbOrganelle() {
                return _super.call(this, constants.organelles.DbOrganelle) || this;
            }
            return DbOrganelle;
        }(Organelle));
        organelle.DbOrganelle = DbOrganelle;
        var NetClientOrganelle = /** @class */ (function (_super) {
            __extends(NetClientOrganelle, _super);
            function NetClientOrganelle() {
                return _super.call(this, constants.organelles.NetClientOrganelle) || this;
            }
            return NetClientOrganelle;
        }(Organelle));
        organelle.NetClientOrganelle = NetClientOrganelle;
        var GPSOrganelle = /** @class */ (function (_super) {
            __extends(GPSOrganelle, _super);
            function GPSOrganelle() {
                return _super.call(this, constants.organelles.GPSOrganelle) || this;
            }
            return GPSOrganelle;
        }(Organelle));
        organelle.GPSOrganelle = GPSOrganelle;
    })(organelle = alive.organelle || (alive.organelle = {}));
    var particle;
    (function (particle_1) {
        var Base64File = /** @class */ (function (_super) {
            __extends(Base64File, _super);
            function Base64File(content, of) {
                return _super.call(this, new core_1.MetaV2(Base64File.NAME, of), content) || this;
            }
            Base64File.NAME = "Base64File";
            return Base64File;
        }(core_1.ParticleV2));
        particle_1.Base64File = Base64File;
        var IamReady = /** @class */ (function (_super) {
            __extends(IamReady, _super);
            function IamReady(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.IAmReady, of)) || this;
            }
            return IamReady;
        }(VoidParticle));
        particle_1.IamReady = IamReady;
        var OrganelleReady = /** @class */ (function (_super) {
            __extends(OrganelleReady, _super);
            function OrganelleReady(organelleName, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.OrganelleReady, of), { organelleName: organelleName }) || this;
            }
            return OrganelleReady;
        }(core_1.ParticleV2));
        particle_1.OrganelleReady = OrganelleReady;
        var Api = /** @class */ (function (_super) {
            __extends(Api, _super);
            function Api(particles, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Api, of), particles) || this;
            }
            return Api;
        }(core_1.ParticleV2));
        particle_1.Api = Api;
        var Password = /** @class */ (function (_super) {
            __extends(Password, _super);
            function Password(euglenaName, value) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Password, euglenaName), value) || this;
            }
            return Password;
        }(core_1.ParticleV2));
        particle_1.Password = Password;
        var subscriptionDict = /** @class */ (function (_super) {
            __extends(subscriptionDict, _super);
            function subscriptionDict(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.subscriptionDict, of), new cessnalib_1.sys.type.Map(function (key1, key2) {
                    return cessnalib_1.js.Class.doesCover(key1, key2);
                })) || this;
            }
            return subscriptionDict;
        }(core_1.ParticleV2));
        particle_1.subscriptionDict = subscriptionDict;
        var Subscribe = /** @class */ (function (_super) {
            __extends(Subscribe, _super);
            function Subscribe(particleReference, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Subscribe, of), particleReference) || this;
            }
            return Subscribe;
        }(core_1.ParticleV2));
        particle_1.Subscribe = Subscribe;
        var Coordinate = /** @class */ (function (_super) {
            __extends(Coordinate, _super);
            function Coordinate(lat, lon, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Coordinate, of), { lat: lat, lon: lon }) || this;
            }
            return Coordinate;
        }(core_1.ParticleV2));
        particle_1.Coordinate = Coordinate;
        var WhoAmI = /** @class */ (function (_super) {
            __extends(WhoAmI, _super);
            function WhoAmI(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.WhoAmI, of)) || this;
            }
            return WhoAmI;
        }(core_1.ParticleV2));
        particle_1.WhoAmI = WhoAmI;
        var NetClientOrganelleSap = /** @class */ (function (_super) {
            __extends(NetClientOrganelleSap, _super);
            function NetClientOrganelleSap(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.NetClientOrganelleSap, of), { euglenaName: of }) || this;
            }
            return NetClientOrganelleSap;
        }(core_1.ParticleV2));
        particle_1.NetClientOrganelleSap = NetClientOrganelleSap;
        var WebUIOrganelleSap = /** @class */ (function (_super) {
            __extends(WebUIOrganelleSap, _super);
            function WebUIOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.WebUIOrganelleSap, of), content) || this;
            }
            return WebUIOrganelleSap;
        }(core_1.ParticleV2));
        particle_1.WebUIOrganelleSap = WebUIOrganelleSap;
        var WebOrganelleSap = /** @class */ (function (_super) {
            __extends(WebOrganelleSap, _super);
            function WebOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.WebOrganelleSap, of), content) || this;
            }
            return WebOrganelleSap;
        }(core_1.ParticleV2));
        particle_1.WebOrganelleSap = WebOrganelleSap;
        var GPSOrganelleSap = /** @class */ (function (_super) {
            __extends(GPSOrganelleSap, _super);
            function GPSOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.GPSOrganelleSap, of), content) || this;
            }
            return GPSOrganelleSap;
        }(core_1.ParticleV2));
        particle_1.GPSOrganelleSap = GPSOrganelleSap;
        var NetOrganelleSap = /** @class */ (function (_super) {
            __extends(NetOrganelleSap, _super);
            function NetOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.NetOrganelleSap, of), content) || this;
            }
            return NetOrganelleSap;
        }(core_1.ParticleV2));
        particle_1.NetOrganelleSap = NetOrganelleSap;
        var DbOrganelleSap = /** @class */ (function (_super) {
            __extends(DbOrganelleSap, _super);
            function DbOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.DbOrganelleSap, of), content) || this;
            }
            return DbOrganelleSap;
        }(core_1.ParticleV2));
        particle_1.DbOrganelleSap = DbOrganelleSap;
        var TimeOrganelleSap = /** @class */ (function (_super) {
            __extends(TimeOrganelleSap, _super);
            function TimeOrganelleSap(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.TimeOrganelleSap, of), content) || this;
            }
            return TimeOrganelleSap;
        }(core_1.ParticleV2));
        particle_1.TimeOrganelleSap = TimeOrganelleSap;
        var DbIsOnline = /** @class */ (function (_super) {
            __extends(DbIsOnline, _super);
            function DbIsOnline(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.DbIsOnline, of)) || this;
            }
            return DbIsOnline;
        }(VoidParticle));
        particle_1.DbIsOnline = DbIsOnline;
        var ServerRunning = /** @class */ (function (_super) {
            __extends(ServerRunning, _super);
            function ServerRunning(port, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ServerRunning, of), { port: port }) || this;
            }
            return ServerRunning;
        }(core_1.ParticleV2));
        particle_1.ServerRunning = ServerRunning;
        var ReturnCurrentTime = /** @class */ (function (_super) {
            __extends(ReturnCurrentTime, _super);
            function ReturnCurrentTime(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ReturnCurrentTime, of)) || this;
            }
            return ReturnCurrentTime;
        }(VoidParticle));
        particle_1.ReturnCurrentTime = ReturnCurrentTime;
        var ReturnIfConnectedToTheInternet = /** @class */ (function (_super) {
            __extends(ReturnIfConnectedToTheInternet, _super);
            function ReturnIfConnectedToTheInternet(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ReturnIfConnectedToTheInternet, of)) || this;
            }
            return ReturnIfConnectedToTheInternet;
        }(VoidParticle));
        particle_1.ReturnIfConnectedToTheInternet = ReturnIfConnectedToTheInternet;
        var OrganelleHasComeToLife = /** @class */ (function (_super) {
            __extends(OrganelleHasComeToLife, _super);
            function OrganelleHasComeToLife(organelleName, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.OrganelleHasComeToLife, of), { organelleName: organelleName }) || this;
            }
            return OrganelleHasComeToLife;
        }(core_1.ParticleV2));
        particle_1.OrganelleHasComeToLife = OrganelleHasComeToLife;
        var Domain = /** @class */ (function (_super) {
            __extends(Domain, _super);
            function Domain(domain, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Domain, of), domain) || this;
            }
            return Domain;
        }(core_1.ParticleV2));
        particle_1.Domain = Domain;
        var Authenticate = /** @class */ (function (_super) {
            __extends(Authenticate, _super);
            function Authenticate(euglenaName, password, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Authenticate, of), { euglenaName: euglenaName, password: password }) || this;
            }
            return Authenticate;
        }(core_1.ParticleV2));
        particle_1.Authenticate = Authenticate;
        var Proxy = /** @class */ (function (_super) {
            __extends(Proxy, _super);
            function Proxy(from, to, expireTime, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Proxy, of, expireTime), { from: from, to: to }) || this;
            }
            return Proxy;
        }(core_1.ParticleV2));
        particle_1.Proxy = Proxy;
        var SetTime = /** @class */ (function (_super) {
            __extends(SetTime, _super);
            function SetTime(time, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.SetTime, of), time) || this;
            }
            return SetTime;
        }(core_1.ParticleV2));
        particle_1.SetTime = SetTime;
        var ConnectToEuglena = /** @class */ (function (_super) {
            __extends(ConnectToEuglena, _super);
            function ConnectToEuglena(euglenaInfo, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ConnectToEuglena, of), euglenaInfo) || this;
            }
            return ConnectToEuglena;
        }(core_1.ParticleV2));
        particle_1.ConnectToEuglena = ConnectToEuglena;
        var ConnectedToEuglena = /** @class */ (function (_super) {
            __extends(ConnectedToEuglena, _super);
            function ConnectedToEuglena(euglenaInfo, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ConnectedToEuglena, of), euglenaInfo) || this;
            }
            return ConnectedToEuglena;
        }(core_1.ParticleV2));
        particle_1.ConnectedToEuglena = ConnectedToEuglena;
        var DisconnectedFromEuglena = /** @class */ (function (_super) {
            __extends(DisconnectedFromEuglena, _super);
            function DisconnectedFromEuglena(euglenaInfo, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ConnectedToEuglena, of), euglenaInfo) || this;
            }
            return DisconnectedFromEuglena;
        }(core_1.ParticleV2));
        particle_1.DisconnectedFromEuglena = DisconnectedFromEuglena;
        var Listen = /** @class */ (function (_super) {
            __extends(Listen, _super);
            function Listen(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Listen, of)) || this;
            }
            return Listen;
        }(VoidParticle));
        particle_1.Listen = Listen;
        var ThrowImpact = /** @class */ (function (_super) {
            __extends(ThrowImpact, _super);
            function ThrowImpact(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ThrowImpact, of), content) || this;
            }
            return ThrowImpact;
        }(core_1.ParticleV2));
        particle_1.ThrowImpact = ThrowImpact;
        var Impact = /** @class */ (function (_super) {
            __extends(Impact, _super);
            function Impact(particle, token, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Impact, of), { particle: particle, token: token }) || this;
            }
            return Impact;
        }(core_1.ParticleV2));
        particle_1.Impact = Impact;
        var EuglenaInfo = /** @class */ (function (_super) {
            __extends(EuglenaInfo, _super);
            function EuglenaInfo(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.EuglenaInfo, of), content) || this;
            }
            return EuglenaInfo;
        }(core_1.ParticleV2));
        particle_1.EuglenaInfo = EuglenaInfo;
        var OrganelleInfoLocationType;
        (function (OrganelleInfoLocationType) {
            OrganelleInfoLocationType[OrganelleInfoLocationType["FileSystemPath"] = 0] = "FileSystemPath";
            OrganelleInfoLocationType[OrganelleInfoLocationType["NodeModules"] = 1] = "NodeModules";
            OrganelleInfoLocationType[OrganelleInfoLocationType["Url"] = 2] = "Url";
        })(OrganelleInfoLocationType = particle_1.OrganelleInfoLocationType || (particle_1.OrganelleInfoLocationType = {}));
        var OrganelleInfo = /** @class */ (function (_super) {
            __extends(OrganelleInfo, _super);
            function OrganelleInfo(organelleName, locationType, locationPath, sap, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.OrganelleInfo, of), { name: organelleName, location: { type: locationType, path: locationPath }, sap: sap }) || this;
            }
            return OrganelleInfo;
        }(core_1.ParticleV2));
        particle_1.OrganelleInfo = OrganelleInfo;
        var CytoplasmInfo = /** @class */ (function (_super) {
            __extends(CytoplasmInfo, _super);
            function CytoplasmInfo(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.EuglenaInfo, of), content) || this;
            }
            return CytoplasmInfo;
        }(core_1.ParticleV2));
        particle_1.CytoplasmInfo = CytoplasmInfo;
        var OrganelleList = /** @class */ (function (_super) {
            __extends(OrganelleList, _super);
            function OrganelleList(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.OrganelleList, of), content) || this;
            }
            return OrganelleList;
        }(core_1.ParticleV2));
        particle_1.OrganelleList = OrganelleList;
        var Exception = /** @class */ (function (_super) {
            __extends(Exception, _super);
            function Exception(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Exception, of), content) || this;
            }
            return Exception;
        }(core_1.ParticleV2));
        particle_1.Exception = Exception;
        var Time = /** @class */ (function (_super) {
            __extends(Time, _super);
            function Time(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Time, of), content) || this;
            }
            return Time;
        }(core_1.ParticleV2));
        particle_1.Time = Time;
        var Acknowledge = /** @class */ (function (_super) {
            __extends(Acknowledge, _super);
            function Acknowledge(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Acknowledge, of)) || this;
            }
            return Acknowledge;
        }(VoidParticle));
        particle_1.Acknowledge = Acknowledge;
        var ConnectedToTheInternet = /** @class */ (function (_super) {
            __extends(ConnectedToTheInternet, _super);
            function ConnectedToTheInternet(content, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ConnectedToTheInternet, of), content) || this;
            }
            return ConnectedToTheInternet;
        }(BooleanParticle));
        particle_1.ConnectedToTheInternet = ConnectedToTheInternet;
        var EuglenaHasBeenBorn = /** @class */ (function (_super) {
            __extends(EuglenaHasBeenBorn, _super);
            function EuglenaHasBeenBorn(of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.EuglenaHasBeenBorn, of), true) || this;
            }
            return EuglenaHasBeenBorn;
        }(BooleanParticle));
        particle_1.EuglenaHasBeenBorn = EuglenaHasBeenBorn;
        var RenameParticle = /** @class */ (function (_super) {
            __extends(RenameParticle, _super);
            function RenameParticle(newName, query, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.RenameParticle, of), { newName: newName, query: query }) || this;
            }
            return RenameParticle;
        }(core_1.ParticleV2));
        particle_1.RenameParticle = RenameParticle;
        var SaveParticle = /** @class */ (function (_super) {
            __extends(SaveParticle, _super);
            function SaveParticle(particle, of, query) {
                return _super.call(this, new core_1.MetaV2(constants.particles.SaveParticle, of), { particle: particle, query: query }) || this;
            }
            return SaveParticle;
        }(core_1.ParticleV2));
        particle_1.SaveParticle = SaveParticle;
        var ReadParticle = /** @class */ (function (_super) {
            __extends(ReadParticle, _super);
            function ReadParticle(query, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ReadParticle, of), query) || this;
            }
            return ReadParticle;
        }(core_1.ParticleV2));
        particle_1.ReadParticle = ReadParticle;
        var ReadParticles = /** @class */ (function (_super) {
            __extends(ReadParticles, _super);
            function ReadParticles(query, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.ReadParticles, of), query) || this;
            }
            return ReadParticles;
        }(core_1.ParticleV2));
        particle_1.ReadParticles = ReadParticles;
        var Particles = /** @class */ (function (_super) {
            __extends(Particles, _super);
            function Particles(particles, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.Particles, of), particles) || this;
            }
            return Particles;
        }(core_1.ParticleV2));
        particle_1.Particles = Particles;
        var RemoveParticle = /** @class */ (function (_super) {
            __extends(RemoveParticle, _super);
            function RemoveParticle(query, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.RemoveParticle, of), query) || this;
            }
            return RemoveParticle;
        }(core_1.ParticleV2));
        particle_1.RemoveParticle = RemoveParticle;
        var RemoveParticles = /** @class */ (function (_super) {
            __extends(RemoveParticles, _super);
            function RemoveParticles(query, of) {
                return _super.call(this, new core_1.MetaV2(constants.particles.RemoveParticles, of), query) || this;
            }
            return RemoveParticles;
        }(core_1.ParticleV2));
        particle_1.RemoveParticles = RemoveParticles;
        var DoesParticleExist = /** @class */ (function (_super) {
            __extends(DoesParticleExist, _super);
            function DoesParticleExist(content, of) {
                return _super.call(this, new core_1.MetaV2(alive.constants.particles.DoesParticleExist, of), content) || this;
            }
            return DoesParticleExist;
        }(core_1.ParticleV2));
        particle_1.DoesParticleExist = DoesParticleExist;
    })(particle = alive.particle || (alive.particle = {}));
})(alive = exports.alive || (exports.alive = {}));

//# sourceMappingURL=index.js.map
