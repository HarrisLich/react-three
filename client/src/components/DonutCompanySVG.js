import {motion} from 'framer-motion'

export const DonutCompanySVG = function(props){
    return(
        
        <motion.svg xmlns={"http://www.w3.org/2000/svg"} viewBox={'249.799 574.776 1202.200 135.422'}>
            <motion.path initial={{pathLength: 0, fillOpacity: 0}} animate={{pathLength: 1, transition: {duration: 1}}} xmlns="http://www.w3.org/2000/svg" d="M 313.95,601.97 C 313.59 602.60, 313.57 603.34, 313.31 605.09 C 313.06 606.84, 312.86 608.06, 312.67 610.73 C 312.49 613.40, 312.56 615.05, 312.41 618.45 C 312.26 621.85, 312.03 623.91, 311.91 627.72 C 311.79 631.53, 311.83 633.63, 311.79 637.51 C 311.76 641.38, 311.66 643.44, 311.75 647.10 C 311.84 650.76, 312.02 652.53, 312.25 655.78 C 312.48 659.04, 312.45 660.77, 312.89 663.39 C 313.33 666.00, 313.82 667.43, 314.44 668.87 C 315.06 670.31, 315.67 670.72, 315.99 670.57 C 316.30 670.43, 316.52 669.77, 316.02 668.14 C 315.52 666.51, 315.12 665.11, 313.48 662.40 C 311.84 659.70, 
            310.49 657.89, 307.84 654.61 C 305.18 651.33, 303.57 649.43, 300.22 646.01 C 296.86 642.58, 294.84 640.89, 291.07 637.46 C 287.29 634.04, 285.18 632.21, 281.34 628.89 C 277.50 625.58, 275.32 623.96, 271.85 620.87 C 268.38 617.78, 266.71 616.36, 264.00 613.45 C 261.28 610.55, 259.99 608.99, 258.28 606.34 C 256.58 603.68, 255.99 602.46, 255.47 600.16 C 254.96 597.86, 255.01 596.84, 255.72 594.84 C 256.43 592.83, 257.03 591.94, 259.04 590.14 C 261.05 588.34, 262.28 587.39, 265.78 585.84 C 269.28 584.29, 271.70 583.53, 276.55 582.41 C 281.41 581.29, 284.29 580.88, 290.05 580.24 C 295.81 579.61, 299.11 579.39, 305.36 579.24 C 
            311.60 579.09, 315.03 579.25, 321.26 579.49 C 327.49 579.72, 330.63 579.94, 336.50 580.42 C 342.36 580.89, 345.37 581.27, 350.59 581.87 C 355.81 582.46, 358.38 582.77, 362.60 583.41 C 366.82 584.06, 368.57 584.47, 371.70 585.10 C 374.83 585.72, 376.16 586.15, 378.24 586.52 C 380.31 586.89, 381.26 587.03, 382.07 586.95 C 382.87 586.87, 382.95 586.59, 382.28 586.13 C 381.61 585.67, 380.73 585.28, 378.70 584.64 C 376.67 584.00, 375.30 583.51, 372.12 582.91 C 368.95 582.32, 367.12 582.17, 362.84 581.65 C 358.57 581.14, 356.00 580.87, 350.75 580.34 C 345.50 579.81, 342.49 579.46, 336.61 579.02 C 330.72 578.57, 327.57 578.35, 321.31 578.11 C 315.05 577.87, 311.61 577.70, 305.33 577.81 C 299.04 577.92, 295.72 578.11, 289.89 578.67 C 284.06 579.23, 281.16 579.58, 276.16 580.60 C 271.17 581.62, 268.69 582.26, 264.91 583.78 C 261.14 585.31, 259.58 586.15, 257.30 588.21 C 255.02 590.27, 254.33 591.59, 253.51 594.08 C 252.68 596.57, 252.59 597.97, 253.17 600.67 C 253.75 603.36, 254.52 604.74, 256.41 607.56 C 258.29 610.39, 259.73 611.87, 262.59 614.80 C 265.44 617.72, 267.15 619.12, 270.68 622.20 C 274.21 625.28, 276.38 626.88, 280.22 630.19 C 284.06 633.50, 286.17 635.32, 289.89 638.76 C 293.60 642.19, 295.60 643.89, 298.79 647.36 C 301.99 650.82, 303.50 652.75, 305.87 656.10 C 308.25 659.45, 309.07 661.47, 310.68 664.11 C 312.28 666.74, 312.83 667.94, 313.89 669.27 C 314.96 670.59, 315.48 670.91, 316.01 670.74 C 316.54 670.56, 316.60 669.95, 316.54 668.40 C 316.49 666.84, 316.10 665.51, 315.73 662.95 C 315.37 660.38, 315.08 658.75, 314.74 655.57 C 314.40 652.38, 314.18 650.64, 314.04 647.03 C 313.91 643.42, 314.02 641.37, 314.08 637.53 C 314.14 633.69, 314.11 631.61, 314.35 627.83 C 314.59 624.06, 314.94 622.04, 315.28 618.66 C 315.63 615.28, 315.94 613.63, 316.07 610.93 C 316.20 608.22, 316.14 606.94, 315.95 605.14 C 315.75 603.34, 315.50 602.56, 315.10 601.93 C 314.70 601.30, 314.30 601.34, 313.95 601.97" style={{stroke: 'black', fill: 'black'}}/>
            
        </motion.svg>
    )
}