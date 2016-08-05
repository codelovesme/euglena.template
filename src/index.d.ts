/**
 * Created by codelovesme on 6/19/2015.
 */
import { euglena } from "euglena";
import Impact = euglena.being.interaction.Impact;
export declare module euglena_template {
    namespace being {
        namespace particle {
            class BooleanParticle extends euglena.being.Particle {
                constructor(name: string, content: boolean, of: string);
            }
            class VoidParticle extends euglena.being.Particle {
                constructor(name: string, of: string);
            }
        }
        namespace alive {
            import Particle = euglena.being.Particle;
            namespace constants {
                namespace particles {
                    const ParticlesOf: string;
                    const EuglenaInfo: string;
                    const OrganelleList: string;
                    const DbOrganelleInitialProperties: string;
                    const WebOrganelleInitialProperties: string;
                    const NucleusOrganelleInitialProperties: string;
                    const ReceptionOrganelleInitialProperties: string;
                    const EuglenaName: string;
                    const ImpactReceived: string;
                    const EuglenaHasBeenBorn: string;
                    const EuglenaHasBeenDivided: string;
                    const Acknowledge: string;
                    const Time: string;
                    const Exception: string;
                    const ConnectedToTheInternet: string;
                    const Token: string;
                    const Impacts: string;
                    const DoesParticleExist: string;
                    const DoesUniqueParticleExist: string;
                    const Gene: string;
                    const ThrowImpact: string;
                    const Listen: string;
                    const ConnectedToEuglena: string;
                    const DisconnectedFromEuglena: string;
                    const ConnectToEuglena: string;
                    const ReturnCurrentTime: string;
                    const Serve: string;
                    const ReturnIfConnectedToTheInternet: string;
                    const Session: string;
                    const SetTime: string;
                    const StartClock: string;
                    const StartDatabase: string;
                    const DbIsOnline: string;
                }
                namespace organelles {
                    const NetOrganelle: string;
                    const TimeOrganelle: string;
                    const WebOrganelle: string;
                    const DbOrganelle: string;
                }
                namespace impacts {
                    const AddGene: string;
                    const TimeChanged: string;
                    const ExceptionOccurred: string;
                    const SaveParticle: string;
                    const ReadParticle: string;
                    const ReadParticles: string;
                    const ReadParticlesOf: string;
                    const RemoveParticle: string;
                }
            }
            namespace organelle {
                import Organelle = euglena.being.alive.Organelle;
                abstract class TimeOrganelle extends Organelle<{
                    euglenaName: string;
                }> {
                    constructor(className: string);
                }
                abstract class NetOrganelle extends Organelle<{
                    euglenaName: string;
                    port: string;
                    euglenaInfo: particle.EuglenaInfo;
                }> {
                    constructor(className: string);
                }
                abstract class WebOrganelle extends Organelle<{
                    euglenaName: string;
                    port: string;
                }> {
                    constructor(className: string);
                }
                abstract class DbOrganelle extends Organelle<{
                    euglenaName: string;
                    url: string;
                    port: number;
                    databaseName: string;
                }> {
                    constructor(className: string);
                }
            }
            namespace particle {
                class DbIsOnline extends being.particle.VoidParticle {
                    constructor(of: string);
                }
                class StartDatabase extends being.particle.VoidParticle {
                    constructor(of: string);
                }
                import VoidParticle = euglena_template.being.particle.VoidParticle;
                class Serve extends VoidParticle {
                    constructor(of: string);
                }
                class ReturnCurrentTime extends VoidParticle {
                    constructor(of: string);
                }
                class ReturnIfConnectedToTheInternet extends VoidParticle {
                    constructor(of: string);
                }
                interface SessionContent {
                    token: string;
                }
                class Session extends euglena.being.Particle {
                    constructor(content: SessionContent, of: string);
                }
                class SetTime extends Particle {
                    constructor(time: euglena.sys.type.Time, of: string);
                }
                class StartClock extends being.particle.VoidParticle {
                    constructor(of: string);
                }
                class ConnectToEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
                }
                class ConnectedToEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
                }
                class DisconnectedFromEuglena extends euglena.being.Particle {
                    constructor(euglenaInfo: alive.particle.EuglenaInfo, of: string);
                }
                class Listen extends being.particle.VoidParticle {
                    constructor(of: string);
                }
                interface ThrowImpactContent {
                    to: alive.particle.EuglenaInfo;
                    impact: Impact;
                }
                class ThrowImpact extends euglena.being.Particle {
                    constructor(content: {
                        to: alive.particle.EuglenaInfo;
                        impact: Impact;
                    }, of: string);
                }
                class EuglenaInfo implements euglena.sys.type.Named {
                    name: string;
                    url: string;
                    port: string;
                    constructor(name: string, url: string, port: string);
                }
                class OrganelleList extends Particle {
                    constructor(content: Array<string>, of: string);
                }
                interface TokenContent {
                    uuid: string;
                    expiretime: euglena.sys.type.Time;
                    for: string;
                }
                class Token extends Particle {
                    constructor(content: string, of: string);
                }
                class Exception extends euglena.being.Particle {
                    constructor(content: euglena.sys.type.Exception, of: string);
                }
                class Time extends euglena.being.Particle {
                    constructor(content: euglena.sys.type.Time, of: string);
                }
                class Acknowledge extends being.particle.VoidParticle {
                    constructor(of: string);
                }
                class ConnectedToTheInternet extends being.particle.BooleanParticle {
                    constructor(content: boolean, of: string);
                }
                class EuglenaHasBeenBorn extends being.particle.BooleanParticle {
                    constructor(of: string);
                }
                class EuglenaHasBeenDivided extends being.particle.BooleanParticle {
                    constructor(of: string);
                }
                class SaveParticle extends Particle {
                    constructor(content: Particle, of: string);
                }
                class ReadParticle extends Particle {
                    constructor(content: euglena.being.alive.dna.ParticleReference, of: string);
                }
                class ReadParticles extends Particle {
                    constructor(particleName: string, of: string);
                }
                class ReadParticlesOf extends Particle {
                    constructor(whose: string, of: string);
                }
                class ParticlesOf extends Particle {
                    constructor(particles: Particle[], of: string);
                }
                interface RemoveParticleContent {
                    name: string;
                    of: string;
                }
                class RemoveParticle extends Particle {
                    constructor(content: RemoveParticleContent, of: string);
                }
                interface DoesParticleExistContent {
                    name: string;
                    of: string;
                }
                class DoesParticleExist extends Particle {
                    constructor(content: DoesParticleExistContent, of: string);
                }
                class ImpactReceived extends euglena.being.Particle {
                    content: Impact;
                    constructor(content: Impact, of: string);
                }
            }
        }
    }
    namespace reference {
        namespace being {
            namespace interaction {
                const Impact: Impact;
            }
            const Particle: euglena.being.Particle;
        }
    }
}
