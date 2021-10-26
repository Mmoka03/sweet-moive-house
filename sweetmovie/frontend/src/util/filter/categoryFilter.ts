export const categoryFilter = (category: number): string => {
    switch (category) {
        case 1:
            return '액션'
        case 2:
            return '로맨스'
        case 3:
            return '코미디'
        case 4:
            return '스릴러'
        case 5:
            return '애니메이션'
        default:
            return 'not found case'
    }
} 