import React, { useState } from 'react';
import { Lock } from 'lucide-react';

export interface Skill {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconNegative: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  href: string;
  dependencies: string[];
}

interface Position {
  x: number;
  y: number;
}

interface SkillTreeProps {
  skills: Skill[];
  positions: Position[];
}

const SkillTree: React.FC<SkillTreeProps> = ({ skills, positions }) => {
  const [unlockedSkills, setUnlockedSkills] = useState<Set<string>>(new Set(['skill-0', 'skill-3', 'skill-4']));

  const canUnlock = (skillId: string): boolean => {
    const skill = skills.find((s) => s.id === skillId);
    if (!skill) return false;
    return skill.dependencies.every((dep) => unlockedSkills.has(dep));
  };

  const isUnlocked = (skillId: string): boolean => unlockedSkills.has(skillId);

  const shouldShowContent = (skillId: string): boolean => {
    const skill = skills.find((s) => s.id === skillId);
    if (!skill) return false;

    // Skill pertama selalu show content
    if (skill.dependencies.length === 0) return true;

    // Show content jika minimal satu dependency sudah unlocked
    return skill.dependencies.some((dep) => unlockedSkills.has(dep));
  };

  const handleSkillClick = (skillId: string): void => {
    if (!isUnlocked(skillId) && canUnlock(skillId)) {
      setUnlockedSkills(new Set([...unlockedSkills, skillId]));
    }
  };

  const renderConnections = (): React.ReactElement[] => {
    return skills.flatMap((skill, index) => {
      return skill.dependencies.map((depId) => {
        const depIndex = skills.findIndex((s) => s.id === depId);
        const start = positions[depIndex];
        const end = positions[index];

        const isActive = isUnlocked(skill.id) && isUnlocked(depId);

        return (
          <line
            key={`${depId}-${skill.id}`}
            x1={`${start.x}%`}
            y1={`${start.y}%`}
            x2={`${end.x}%`}
            y2={`${end.y}%`}
            stroke={isActive ? '#06b6d4' : '#1e3a8a'}
            strokeWidth="2"
            opacity={isActive ? 0.8 : 0.3}
            className="transition-all duration-500"
          />
        );
      });
    });
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[900px] sm:h-[1200px] md:h-[1500px] rounded-3xl overflow-visible">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {renderConnections()}
          </svg>

          {/* Skill nodes */}
          {skills.map((skill, index) => {
            const unlocked = isUnlocked(skill.id);
            const available = canUnlock(skill.id);
            const showContent = shouldShowContent(skill.id);
            const locked = !unlocked && !available;
            const pos = positions[index];

            return (
              <div
                key={skill.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <button
                  onClick={() => handleSkillClick(skill.id)}
                  disabled={locked || !showContent}
                  className={`relative group ${(locked || !showContent) ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {/* Glow effect */}
                  {unlocked && (
                    <div className="absolute inset-0 rounded-full bg-white blur-xl opacity-50 animate-pulse"></div>
                  )}
                  {/* Main circle */}
                  <div className={`
                      relative 
                      w-10 h-10 
                      sm:w-20 sm:h-20 
                      md:w-24 md:h-24 
                      rounded-full flex items-center justify-center border-4 
                      transition-all duration-300 
                      ${!showContent
                      ? 'bg-slate-950 border-slate-800 opacity-30'
                      : unlocked
                        ? 'bg-white border-white scale-110 shadow-lg shadow-white/50'
                        : available
                          ? 'bg-slate-800 border-white/60 hover:border-white hover:scale-105 shadow-md shadow-white/30'
                          : 'bg-slate-900 border-slate-700 opacity-50'
                    }
`}>
                    <div className="text-center">
                      {showContent ? (
                        <>
                          {unlocked ? (
                            <skill.iconNegative className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
                          ) : (
                            <skill.icon className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
                          )}

                          {locked && (
                            <Lock className="absolute -top-2 -right-2 w-6 h-6 text-slate-500 bg-slate-900 rounded-full p-1" />
                          )}
                        </>
                      ) : (
                        <Lock className="w-8 h-8 text-slate-700" />
                      )}
                    </div>
                  </div>
                  {/* Skill name tooltip */}
                  {showContent && (
                    <div className={`absolute top-full mt-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${unlocked
                      ? 'bg-white/90 text-slate-900 font-semibold'
                      : 'bg-slate-800/90 text-white'
                      } opacity-0 group-hover:opacity-100 pointer-events-none border border-white/50`}>
                      {skill.name}
                      {!unlocked && available && (
                        <div className="text-xs text-slate-300 mt-1">Click to unlock</div>
                      )}
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillTree;
