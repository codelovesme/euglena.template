
"use strict";

/**
 * Created by codelovesme on 6/19/2015.
 */
import {euglena} from "euglena";
import Exception = euglena.sys.type.Exception;
import ParticleReference = euglena.being.alive.dna.ParticleReference;
import Impact = euglena.being.interaction.Impact;
import interaction = euglena.being.interaction;

export module euglena_template {
    export namespace being {
        export namespace particle {
            export class BooleanParticle extends euglena.being.Particle {
                constructor(name: string, content: boolean, of: string) { super(name, content, of); }
            }
            export class VoidParticle extends euglena.being.Particle {
                constructor(name: string, of: string) { super(name, null, of); }
            }
        }
        export namespace alive {
            import Particle = euglena.being.Particle;
            import Body = euglena.being.alive.Body;
            import Time = euglena.sys.type.Time;
            export namespace constants {
                export namespace particles {
                    export const ParticlesOf = "ParticlesOf";
                    export const EuglenaInfo = "EuglenaInfo";
                    export const OrganelleList = "OrganelleList";
                    export const DbOrganelleInitialProperties = "DbOrganelleInitialProperties";
                    export const WebOrganelleInitialProperties = "WebOrganelleInitialProperties";
                    export const NucleusOrganelleInitialProperties = "NucleusOrganelleInitialProperties";
                    export const ReceptionOrganelleInitialProperties = "ReceptionOrganelleInitialProperties";
                    export const EuglenaName = "EuglenaName";
                    export const ImpactReceived = "ImpactReceived";
                    export const EuglenaHasBeenBorn = "EuglenaHasBeenBorn";
                    export const EuglenaHasBeenDivided = "EuglenaHasBeenDivided";
                    export const Acknowledge = "Acknowledge";
                    export const Time = "Time";
                    export const Exception = "Exception";
                    export const ConnectedToTheInternet = "ConnectedToTheInternet";
                    export const Token = "Token";
                    export const Impacts = "Impacts";
                    export const DoesParticleExist = "DoesParticleExist";
                    export const DoesUniqueParticleExist = "DoesUniqueParticleExist";
                    export const Gene = "Gene";
                    export const ThrowImpact = "ThrowImpact";
                    export const Listen = "Listen";
                    export const ConnectedToEuglena = "ConnectedToEuglena";
                    export const DisconnectedFromEuglena = "DisconnectedFromEuglena";
                    export const ConnectToEuglena = "ConnectToEuglena";
                    export const ReturnCurrentTime = "ReturnCurrentTime";
                    export const Serve = "Serve";
                    export const ReturnIfConnectedToTheInternet = "ReturnIfConnectedToTheInternet";
                    export const Session = "Session";
                    export const SetTime = "SetTime";
                    export const StartClock = "StartClock";
                    export const StartDatabase = "StartDatabase";
                    export const DbIsOnline = "DbIsOnline";

                }
                export namespace organelles {
                    export const NetOrganelle = "NetOrganelle";
                    export const TimeOrganelle = "TimeOrganelle";
                    export const WebOrganelle = "WebOrganelle";
                    export const DbOrganelle = "DbOrganelle";
                }
                export namespace impacts {
                    export const AddGene = "AddGene";
                    export const TimeChanged = "TimeChanged";
                    export const ExceptionOccurred = "ExceptionOccurred";
                    export const SaveParticle = "SaveParticle";
                    export const ReadParticle = "ReadParticle";
                    export const ReadParticles = "ReadParticles";
                    export const ReadParticlesOf = "ReadParticlesOf";
                    export const RemoveParticle = "RemoveParticle";
                }
            }
            export namespace organelle {
                import Organelle = euglena.being.alive.Organelle;
                export abstract class TimeOrganelle extends Organelle<{}> {
                    constructor(className: string) { super(alive.constants.organelles.TimeOrganelle, className); }
                }
                export abstract class NetOrganelle extends Organelle<{ port: string, euglenaInfo: particle.EuglenaInfo }> {
                    constructor(className: string) { super(constants.organelles.NetOrganelle, className); }
                }
                export abstract class WebOrganelle extends Organelle<{ port: string }>{
                    constructor(className: string) { super(constants.organelles.WebOrganelle, className); }
                }
                export abstract class DbOrganelle extends Organelle<{ url: string, port: number, databaseName: string }>{
                    constructor(className: string) { super(constants.organelles.DbOrganelle, className); }
                }
            }
            export namespace particle {
                export class DbIsOnline extends being.particle.VoidParticle {
                    constructor(of: string) { super(constants.particles.DbIsOnline, of); }
                }
                export class StartDatabase extends being.particle.VoidParticle {
                    constructor(of: string) { super(constants.particles.StartDatabase, of); }
                }
                import VoidParticle = euglena_template.being.particle.VoidParticle;
                export class Serve extends VoidParticle {
                    constructor(of: string) { super(constants.particles.Serve, of); }
                }
                export class ReturnCurrentTime extends VoidParticle {
                    constructor(of: string) { super(constants.particles.ReturnCurrentTime, of); }
                }
                export class ReturnIfConnectedToTheInternet extends VoidParticle {
                    constructor(of: string) { super(constants.particles.ReturnIfConnectedToTheInternet, of); }
                }
                export interface SessionContent {
                    token: string;
                }
                export class Session extends euglena.being.Particle {
                    constructor(content: SessionContent, of: string) { super(constants.particles.Session, content, of); }
                }
                export class SetTime extends Particle {
                    constructor(time: euglena.sys.type.Time, of: string) { super(constants.particles.SetTime, time, of); }
                }
                export class StartClock extends being.particle.VoidParticle {
                    constructor(of: string) { super(constants.particles.StartClock, of); }
                }
                export class ConnectToEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) {
                        super(constants.particles.ConnectToEuglena, euglenaInfo, of);
                    }
                }
                export class ConnectedToEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) { super(constants.particles.ConnectedToEuglena, euglenaInfo, of); }
                }
                export class DisconnectedFromEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) { super(constants.particles.ConnectedToEuglena, euglenaInfo, of); }
                }
                export class Listen extends being.particle.VoidParticle {
                    constructor(of: string) { super(constants.particles.Listen, of); }
                }
                export interface ThrowImpactContent {
                    to: alive.particle.EuglenaInfo,
                    impact: Impact
                }
                export class ThrowImpact extends euglena.being.Particle {
                    constructor(content: { to: alive.particle.EuglenaInfo, impact: Impact }, of: string) { super(constants.particles.ThrowImpact, content, of); }
                }
                export class EuglenaInfo implements euglena.sys.type.Named {
                    constructor(public name: string, public url: string, public port: string) { }
                }
                export class OrganelleList extends Particle {
                    constructor(content: Array<string>, of: string) { super(constants.particles.OrganelleList, content, of); }
                }
                export interface TokenContent {
                    uuid: string;
                    expiretime: euglena.sys.type.Time;
                    for: string;
                }
                export class Token extends Particle {
                    constructor(content: string, of: string) { super(constants.particles.Token, content, of); }
                }
                export class Exception extends euglena.being.Particle {
                    constructor(content: euglena.sys.type.Exception, of: string) { super(constants.particles.Exception, content, of); }
                }
                export class Time extends euglena.being.Particle {
                    constructor(content: euglena.sys.type.Time, of: string) { super(constants.particles.Time, content, of); }
                }
                export class Acknowledge extends being.particle.VoidParticle {
                    constructor(of: string) { super(constants.particles.Acknowledge, of); }
                }
                export class ConnectedToTheInternet extends being.particle.BooleanParticle {
                    constructor(content: boolean, of: string) { super(constants.particles.ConnectedToTheInternet, content, of); }
                }
                export class EuglenaHasBeenBorn extends being.particle.BooleanParticle {
                    constructor(of: string) { super(constants.particles.EuglenaHasBeenBorn, true, of); }
                }
                export class EuglenaHasBeenDivided extends being.particle.BooleanParticle {
                    constructor(of: string) { super(constants.particles.EuglenaHasBeenDivided, true, of); }
                }
                export class SaveParticle extends Particle {
                    constructor(content: Particle, of: string) { super(constants.impacts.SaveParticle, content, of); }
                }
                export class ReadParticle extends Particle {
                    constructor(content: euglena.being.alive.dna.ParticleReference, of: string) { super(constants.impacts.ReadParticle, content, of); }
                }
                export class ReadParticles extends Particle {
                    constructor(particleName: string, of: string) { super(constants.impacts.ReadParticles, particleName, of); }
                }
                export class ReadParticlesOf extends Particle {
                    constructor(whose: string, of: string) { super(constants.impacts.ReadParticlesOf, whose, of); }
                }
                export class ParticlesOf extends Particle {
                    constructor(particles: Particle[], of: string) { super(constants.particles.ParticlesOf, particles, of); }
                }
                export interface RemoveParticleContent {
                    name: string,
                    of: string
                }
                export class RemoveParticle extends Particle {
                    constructor(content: RemoveParticleContent, of: string) { super(constants.impacts.RemoveParticle, content, of); }
                }
                export interface DoesParticleExistContent {
                    name: string,
                    of: string
                }
                export class DoesParticleExist extends Particle {
                    constructor(content: DoesParticleExistContent, of: string) { super(alive.constants.particles.DoesParticleExist, content, of); }
                }
                export class ImpactReceived extends euglena.being.Particle {
                    constructor(public content: Impact, of: string) { super(constants.particles.ImpactReceived, content, of); }
                }
            }
        }
    }
    export namespace reference {
    export namespace being {
        export namespace interaction {
            export const Impact = new euglena.being.interaction.Impact(new euglena.being.Particle("name", "content", "of"), "token");
        }
        export const Particle = new euglena.being.Particle("name", "name", "of");
    }
}
}


