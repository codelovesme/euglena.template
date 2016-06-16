/**
 * Created by codelovesme on 6/19/2015.
 */
import { euglena } from "euglena";
import Impact = euglena.being.interaction.Impact;
export declare module euglena_template {
    namespace being {
        namespace particles {
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
                }
                namespace organelles {
                    const Net: string;
                    const TimeOrganelle: string;
                    const WebOrganelle: string;
                    const Db: string;
                    const Nucleus: string;
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
            namespace organelles {
                import Organelle = euglena.being.alive.Organelle;
                abstract class Nucleus extends Organelle<{
                    applicationDir: string;
                    chromosomeFile: string;
                }> {
                    constructor(className: string);
                }
                abstract class TimeOrganelle extends Organelle<{}> {
                    constructor(className: string);
                }
                abstract class ReceptionOrganelle extends Organelle<{
                    port: string;
                    euglenaInfo: particles.EuglenaInfo;
                }> {
                    constructor(className: string);
                }
                abstract class WebOrganelle extends Organelle<{
                    port: string;
                }> {
                    constructor(className: string);
                }
                abstract class DbOrganelle extends Organelle<{
                    url: string;
                    port: number;
                    databaseName: string;
                }> {
                    constructor(className: string);
                }
            }
            namespace particles {
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
                interface AcknowledgeContent {
                    of: string;
                    id: string;
                }
                class Acknowledge extends being.particles.VoidParticle {
                    constructor(content: AcknowledgeContent, of: string);
                }
                class ConnectedToTheInternet extends being.particles.BooleanParticle {
                    constructor(content: boolean, of: string);
                }
                class EuglenaHasBeenBorn extends being.particles.BooleanParticle {
                    constructor(of: string);
                }
                class EuglenaHasBeenDivided extends being.particles.BooleanParticle {
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
        namespace ghost {
            namespace organelle {
                namespace impactthrower {
                    namespace incomingparticles {
                        interface ThrowImpactContent {
                            to: alive.particles.EuglenaInfo;
                            impact: Impact;
                        }
                        class ThrowImpact extends euglena.being.Particle {
                            constructor(content: {
                                to: alive.particles.EuglenaInfo;
                                impact: Impact;
                            }, of: string);
                        }
                    }
                    namespace constants {
                        namespace incomingparticles {
                            const ThrowImpact: string;
                        }
                    }
                }
                namespace reception {
                    namespace incomingparticles {
                        class Listen extends being.particles.VoidParticle {
                            constructor(of: string);
                        }
                        interface ThrowImpactContent {
                            to: alive.particles.EuglenaInfo;
                            impact: Impact;
                        }
                        class ThrowImpact extends euglena.being.Particle {
                            constructor(content: ThrowImpactContent, of: string);
                        }
                    }
                    namespace outgoingparticles {
                        class ImpactReceived extends euglena.being.Particle {
                            constructor(impact: euglena.being.interaction.Impact, of: string);
                        }
                        class ConnectedToEuglena extends euglena.being.Particle {
                            constructor(euglenaInfo: alive.particles.EuglenaInfo, of: string);
                        }
                        class DisconnectedFromEuglena extends euglena.being.Particle {
                            constructor(euglenaInfo: alive.particles.EuglenaInfo, of: string);
                        }
                    }
                    namespace constants {
                        namespace incomingparticles {
                            const Listen: string;
                            const ThrowImpact: string;
                        }
                        namespace outgoingparticles {
                            const ImpactReceived: string;
                            const ConnectedToEuglena: string;
                            const DisconnectedFromEuglena: string;
                        }
                    }
                }
                namespace impacttransmitter {
                    namespace incomingparticles {
                        class ConnectToEuglena extends euglena.being.Particle {
                            constructor(euglenaInfo: alive.particles.EuglenaInfo, of: string);
                        }
                        interface ThrowImpactContent {
                            to: alive.particles.EuglenaInfo;
                            impact: Impact;
                        }
                        class ThrowImpact extends euglena.being.Particle {
                            constructor(content: {
                                to: string;
                                impact: ThrowImpactContent;
                            }, of: string);
                        }
                    }
                    namespace constants {
                        namespace incomingparticles {
                            const ConnectToEuglena: string;
                            const ThrowImpact: string;
                        }
                    }
                }
                namespace web {
                    namespace constants {
                        namespace incomingparticles {
                            const ReturnCurrentTime: string;
                            const Serve: string;
                            const ReturnIfConnectedToTheInternet: string;
                        }
                    }
                    namespace incomingparticles {
                        import VoidParticle = euglena_template.being.particles.VoidParticle;
                        class Serve extends VoidParticle {
                            constructor(of: string);
                        }
                        class ReturnCurrentTime extends VoidParticle {
                            constructor(of: string);
                        }
                        class ReturnIfConnectedToTheInternet extends VoidParticle {
                            constructor(of: string);
                        }
                    }
                }
                namespace time {
                    import Particle = euglena.being.Particle;
                    namespace outgoingparticles {
                    }
                    namespace incomingparticles {
                        class SetTime extends Particle {
                            constructor(time: euglena.sys.type.Time, of: string);
                        }
                        class StartClock extends being.particles.VoidParticle {
                            constructor(of: string);
                        }
                    }
                    namespace constants {
                        namespace outgoingparticles {
                        }
                        namespace incomingparticles {
                            const SetTime: string;
                            const StartClock: string;
                        }
                    }
                }
                namespace db {
                    namespace outgoingparticles {
                    }
                    namespace incomingparticles {
                        class StartDatabase extends being.particles.VoidParticle {
                            constructor(of: string);
                        }
                    }
                    namespace outgoingparticles {
                        class DbIsOnline extends being.particles.VoidParticle {
                            constructor(of: string);
                        }
                    }
                    namespace constants {
                        const StartDatabase: string;
                        const DbIsOnline: string;
                    }
                }
            }
        }
    }
    namespace reference {
        namespace being {
            namespace interaction {
                class Impact extends euglena.being.interaction.Impact {
                    constructor();
                }
            }
        }
    }
}
