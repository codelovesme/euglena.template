
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
            export abstract class BooleanParticle extends euglena.being.Particle {
                constructor(meta: any, data: Boolean) { super(meta, data); }
            }
            export abstract class VoidParticle extends euglena.being.Particle {
                constructor(meta: any) { super(meta, null); }
            }
        }
        export namespace alive {
            import Particle = euglena.being.Particle;
            import Cytoplasm = euglena.being.alive.Cytoplasm;
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
                    export const ReturnIfConnectedToTheInternet = "ReturnIfConnectedToTheInternet";
                    export const Session = "Session";
                    export const SetTime = "SetTime";
                    export const DbIsOnline = "DbIsOnline";
                    export const NetOrganelleSap = "NetOrganelleSap";
                    export const WebOrganelleSap = "WebOrganelleSap";
                    export const DbOrganelleSap = "DbOrganelleSap";

                }
                export namespace organelles {
                    export const NetOrganelle = "NetOrganelle";
                    export const TimeOrganelle = "TimeOrganelle";
                    export const WebOrganelle = "WebOrganelle";
                    export const DbOrganelle = "DbOrganelle";
                    export const NetClientOrganelle = "NetClientOrganelle";
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
                export abstract class TimeOrganelle extends Organelle<euglena.being.alive.particles.SapContent> {
                    constructor(className: string) { super(alive.constants.organelles.TimeOrganelle, className); }
                }
                export abstract class NetOrganelle extends Organelle<particle.NetOrganelleSapContent> {
                    constructor(className: string) { super(constants.organelles.NetOrganelle, className); }
                }
                export abstract class WebOrganelle extends Organelle<particle.WebOrganelleSapContent>{
                    constructor(className: string) { super(constants.organelles.WebOrganelle, className); }
                }
                export abstract class DbOrganelle extends Organelle<particle.DbOrganelleSapContent>{
                    constructor(className: string) { super(constants.organelles.DbOrganelle, className); }
                }
                export abstract class NetClientOrganelle extends Organelle<particle.NetClientOrganelleSapContent>{
                    constructor(className: string) { super(constants.organelles.NetClientOrganelle, className); }
                }
            }
            export namespace particle {
                export interface NetClientOrganelleSapContent{
                    euglenaName:string
                }
                export interface WebOrganelleSapContent {
                    euglenaName: string,
                    euglenaInfo: particle.EuglenaInfo
                }
                export class WebOrganelleSap extends Particle {
                    constructor(content: WebOrganelleSapContent, of: string) { super({ name: constants.particles.WebOrganelleSap, of: of }, content); }
                }
                export interface NetOrganelleSapContent {
                    euglenaName: string,
                    euglenaInfo: particle.EuglenaInfo
                }
                export class NetOrganelleSap extends Particle {
                    constructor(content: NetOrganelleSapContent, of: string) { super({ name: constants.particles.NetOrganelleSap, of: of }, content); }
                }
                export interface DbOrganelleSapContent {
                    euglenaName: string,
                    url: string,
                    port: number,
                    databaseName: string
                }
                export class DbOrganelleSap extends Particle {
                    constructor(content: DbOrganelleSapContent, of: string) { super({ name: constants.particles.DbOrganelleSap, of: of }, content); }
                }
                export class DbIsOnline extends being.particle.VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.DbIsOnline, of: of }); }
                }
                import VoidParticle = euglena_template.being.particle.VoidParticle;
                export class ReturnCurrentTime extends VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.ReturnCurrentTime, of: of }); }
                }
                export class ReturnIfConnectedToTheInternet extends VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.ReturnIfConnectedToTheInternet, of: of }); }
                }
                export interface SessionContent {
                    token: string;
                }
                export class Session extends euglena.being.Particle {
                    constructor(content: SessionContent, of: string) { super({ name: constants.particles.Session, of: of }, content); }
                }
                export class SetTime extends Particle {
                    constructor(time: euglena.sys.type.Time, of: string) { super({ name: constants.particles.SetTime, of: of }, time); }
                }
                export class ConnectToEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) {
                        super({ name: constants.particles.ConnectToEuglena, of: of }, euglenaInfo);
                    }
                }
                export class ConnectedToEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) { super({ name: constants.particles.ConnectedToEuglena, of: of }, euglenaInfo); }
                }
                export class DisconnectedFromEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string) { super({ name: constants.particles.ConnectedToEuglena, of: of }, euglenaInfo); }
                }
                export class Listen extends being.particle.VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.Listen, of: of }); }
                }
                export interface ThrowImpactContent {
                    to: alive.particle.EuglenaInfo,
                    impact: Impact
                }
                export class ThrowImpact extends euglena.being.Particle {
                    constructor(content: { to: alive.particle.EuglenaInfo, impact: Impact }, of: string) { super({ name: constants.particles.ThrowImpact, of: of }, content); }
                }
                export class EuglenaInfo extends euglena.being.Particle {
                    constructor(content: { name: string, url: string, port: string }, of: string) { super({ name: constants.particles.EuglenaInfo, of: of }, content); }
                }
                export class OrganelleList extends Particle {
                    constructor(content: Array<string>, of: string) { super({ name: constants.particles.OrganelleList, of }, content); }
                }
                export interface TokenContent {
                    uuid: string;
                    expiretime: euglena.sys.type.Time;
                    for: string;
                }
                export class Token extends Particle {
                    constructor(content: string, of: string) { super({ name: constants.particles.Token, of: of }, content); }
                }
                export class Exception extends euglena.being.Particle {
                    constructor(content: euglena.sys.type.Exception, of: string) { super({ name: constants.particles.Exception, of: of }, content); }
                }
                export class Time extends euglena.being.Particle {
                    constructor(content: euglena.sys.type.Time, of: string) { super({ name: constants.particles.Time, of: of }, content); }
                }
                export class Acknowledge extends being.particle.VoidParticle {
                    constructor(of: string) { super({ name: constants.particles.Acknowledge, of: of }); }
                }
                export class ConnectedToTheInternet extends being.particle.BooleanParticle {
                    constructor(content: boolean, of: string) { super({ name: constants.particles.ConnectedToTheInternet, of: of }, content); }
                }
                export class EuglenaHasBeenBorn extends being.particle.BooleanParticle {
                    constructor(of: string) { super({ name: constants.particles.EuglenaHasBeenBorn, of: of }, true); }
                }
                export class SaveParticle extends Particle {
                    constructor(content: Particle, of: string) { super({ name: constants.impacts.SaveParticle, of: of }, content); }
                }
                export class ReadParticle extends Particle {
                    constructor(content: euglena.being.alive.dna.ParticleReference, of: string) { super({ name: constants.impacts.ReadParticle, of: of }, content); }
                }
                export class ReadParticles extends Particle {
                    constructor(particleName: string, of: string) { super({ name: constants.impacts.ReadParticles, of: of }, particleName); }
                }
                export class ReadParticlesOf extends Particle {
                    constructor(whose: string, of: string) { super({ name: constants.impacts.ReadParticlesOf, of: of }, whose); }
                }
                export class ParticlesOf extends Particle {
                    constructor(particles: Particle[], of: string) { super({ name: constants.particles.ParticlesOf, of: of }, particles); }
                }
                export interface RemoveParticleContent {
                    name: string,
                    of: string
                }
                export class RemoveParticle extends Particle {
                    constructor(content: RemoveParticleContent, of: string) { super({ name: constants.impacts.RemoveParticle, of: of }, content); }
                }
                export interface DoesParticleExistContent {
                    name: string,
                    of: string
                }
                export class DoesParticleExist extends Particle {
                    constructor(content: DoesParticleExistContent, of: string) { super({ name: alive.constants.particles.DoesParticleExist, of: of }, content); }
                }
                export class ImpactReceived extends euglena.being.Particle {
                    constructor(public content: Impact, of: string) { super({ name: constants.particles.ImpactReceived, of: of }, content); }
                }
            }
        }
    }
    export namespace reference {
        export namespace being {
            export namespace interaction {
                export const Impact = new euglena.being.interaction.Impact(new euglena.being.Particle({ name: "name", of: "of" }, "content"), "token");
            }
            export const Particle = new euglena.being.Particle({ name: "name", of: "of" }, "content");
        }
    }
}


