var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                  o                             ",
   "                                                                                ",
   "                                                                             x  ",
   "  x                                                                          x  ",
   "  x                     o                                                    x  ",
   "  x                              o          o x                            o x  ",
   "  x                     o                                                    x  ",
   "  x  @     xxxxxxx    e     x                        o          xxxxx    e   x  ",
   "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xx   v   xx   v    x   v xxxxxxx   xxxxxxxxx  ",
   "                              x   xx!!!!!!!!!!!!!!!!!x!!!!!x                    ",
   "                              x!!!xx                 x!!!!!x                    ",
   "                              x!!!xx                 x!!!!!x                    ",
   "                              xxxxxx                 xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
   [" x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                                                             ",
   "  x                                    x ro o o o ox                            ",
   "  x                                    xxxxxxxxxxxxx                            ",
   "  x                          jjj       x                                        ",
   "  x                                    x                                        ",
   "  x                   o                x              xx                        ",
   "  x                   o                x                                        ",
   "  x                   o                x                                        ",
   "  x                   o                x                                        ",
   "  x                  jjj               x       o                                ",
   "  x                                    x      xxx                               ",
   "  x                                    x o                                      ",
   "  x             o                      x xx                                     ",
   "  x                                    x              xx                        ",
   "  x                                    x              xx     xx                 ",
   "  x                                    x     o        xx                        ",
   "  x           jjj                      x     xx       xx                        ",
   "  x                                    x              xx                        ",
   "  x                                    x              xx                        ",
   "  x                            xxxxxxxxx           o  xx                        ",
   "  x                            x                  xx  xx                      x ",
   "  x                            x                      xx                      x ",
   "  x                            x                      xx                      x ",
   "  x                            x           o          xx        o             x ",
   "  x      jjj                   x o o o    xx          xx  o  o jjj  o  o  o   x ",
   "  x  @        r      r         xxxxxxxx               xx  x  x      x  x  x   x ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
   "                              xwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
   "                              xwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
   "                              xwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
   "                              xwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                                             x",
   "                                                                                                            ox",
   "                                                                                                            ox",
   "                                                                                                            ox",
   "                                                                                                            ox",
   "                                                                                                            ox",
   "                                                                               o                            ox",
   "                                                                               o         o  o  o            ox",
   "                                                                               o      xxxxxxxxxx            ox",
   "                                                                      x      e o  x                         ox",
   " x                                                                    ccccccccccccc               c e o o   jx",
   " x                                                                                                cccccccccccx",
   " x                                                                                                           x",
   " x                                                                                                           x",
   " x                                                                                                           x",
   " x                                                                                                           x",
   " x                   o   o      o           o o            jjj                                               x",
   " x                   o   o      o      cccccccc                                                              x",
   " x                   o   o      o    cccccccccwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwx",
   " x  @    ccccccccc   o r o e    o   ccccccccwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwx",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "       p   p   p ppp  pp    p  pp    p  ppppp  pppp ",
   "       p   p   p  p   p p   p  p p   p  p      p   p    ",
   "       p   p   p  p   p  p  p  p  p  p  pppp   pppp     ",
   "        p p p p   p   p   p p  p   p p  p      p   p    ",
   "         p   p   ppp  p    pp  p    pp  ppppp  p    p   ",
   "     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "x                                                      x",
   "x                                                      x",
   "x                                                      x",
   "x                                                      x",
   "x jjj                                                  x",
   "x                                                      x",
   "xxxxxxx                                                x",
   "xxxxxxxxxxxx   @                                       x",
   "xxxxxxxxxxxxxxxxxxxxxxx                                x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        ",
   "                                                        "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
