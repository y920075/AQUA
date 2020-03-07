class classSQL {
    constructor(maxid,classId,className,classType,classLevel,classLocation,classFullLocation,classStartDate,classEndDate,classPrice,classIntroduction,classDesc,classMAXpeople,classNOWpeople,classImg,seller_id){
        this.maxid = maxid
        this.classId = classId
        this.className = className
        this.classType = classType
        this.classLevel = classLevel
        this.classLocation = classLocation
        this.classFullLocation = classFullLocation
        this.classStartDate = classStartDate
        this.classEndDate = classEndDate
        this.classPrice = classPrice
        this.classIntroduction = classIntroduction
        this.classDesc = classDesc
        this.classMAXpeople = classMAXpeople
        this.classNOWpeople = classNOWpeople
        this.classImg = classImg
        this.seller_id = seller_id
    }

    getClassData(query){
        const where = []
        if (query.type) where.push(`classType = '${query.type}'`)
        if (query.level)  where.push(`classLevel = '${query.level}'`)
        if (query.sort)  where.push(`classType = '${query.sort}'`)
        if (query.page)  where.push(`classType = '${query.page}'`)
    }
}