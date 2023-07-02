export var ConstraintAction;
(function (ConstraintAction) {
    ConstraintAction[ConstraintAction["RESTRICT"] = 0] = "RESTRICT";
    ConstraintAction[ConstraintAction["CASCADE"] = 1] = "CASCADE";
})(ConstraintAction || (ConstraintAction = {}));
export var ConstraintTiming;
(function (ConstraintTiming) {
    ConstraintTiming[ConstraintTiming["IMMEDIATE"] = 0] = "IMMEDIATE";
    ConstraintTiming[ConstraintTiming["DEFERRABLE"] = 1] = "DEFERRABLE";
})(ConstraintTiming || (ConstraintTiming = {}));
export var DataStoreType;
(function (DataStoreType) {
    DataStoreType[DataStoreType["INDEXED_DB"] = 0] = "INDEXED_DB";
    DataStoreType[DataStoreType["MEMORY"] = 1] = "MEMORY";
    DataStoreType[DataStoreType["LOCAL_STORAGE"] = 2] = "LOCAL_STORAGE";
    DataStoreType[DataStoreType["FIREBASE"] = 3] = "FIREBASE";
    DataStoreType[DataStoreType["WEB_SQL"] = 4] = "WEB_SQL";
    DataStoreType[DataStoreType["OBSERVABLE_STORE"] = 5] = "OBSERVABLE_STORE";
})(DataStoreType || (DataStoreType = {}));
export var Order;
(function (Order) {
    Order[Order["DESC"] = 0] = "DESC";
    Order[Order["ASC"] = 1] = "ASC";
})(Order || (Order = {}));
export var Type;
(function (Type) {
    Type[Type["ARRAY_BUFFER"] = 0] = "ARRAY_BUFFER";
    Type[Type["BOOLEAN"] = 1] = "BOOLEAN";
    Type[Type["DATE_TIME"] = 2] = "DATE_TIME";
    Type[Type["INTEGER"] = 3] = "INTEGER";
    Type[Type["NUMBER"] = 4] = "NUMBER";
    Type[Type["STRING"] = 5] = "STRING";
    Type[Type["OBJECT"] = 6] = "OBJECT";
})(Type || (Type = {}));
const DEFAULT_VALUES = new Map([
    [Type.ARRAY_BUFFER, null],
    [Type.BOOLEAN, false],
    [Type.DATE_TIME, Object.freeze(new Date(0))],
    [Type.INTEGER, 0],
    [Type.NUMBER, 0],
    [Type.STRING, ''],
    [Type.OBJECT, null],
]);
export var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["READ_ONLY"] = 0] = "READ_ONLY";
    TransactionType[TransactionType["READ_WRITE"] = 1] = "READ_WRITE";
})(TransactionType || (TransactionType = {}));
export var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["SYSTEM_ERROR"] = 0] = "SYSTEM_ERROR";
    ErrorCode[ErrorCode["VERSION_MISMATCH"] = 1] = "VERSION_MISMATCH";
    ErrorCode[ErrorCode["CONNECTION_CLOSED"] = 2] = "CONNECTION_CLOSED";
    ErrorCode[ErrorCode["TIMEOUT"] = 3] = "TIMEOUT";
    ErrorCode[ErrorCode["OPERATION_BLOCKED"] = 4] = "OPERATION_BLOCKED";
    ErrorCode[ErrorCode["QUOTA_EXCEEDED"] = 5] = "QUOTA_EXCEEDED";
    ErrorCode[ErrorCode["TOO_MANY_ROWS"] = 6] = "TOO_MANY_ROWS";
    ErrorCode[ErrorCode["SERVICE_NOT_FOUND"] = 7] = "SERVICE_NOT_FOUND";
    ErrorCode[ErrorCode["UNKNOWN_PLAN_NODE"] = 8] = "UNKNOWN_PLAN_NODE";
    ErrorCode[ErrorCode["DATA_ERROR"] = 100] = "DATA_ERROR";
    ErrorCode[ErrorCode["TABLE_NOT_FOUND"] = 101] = "TABLE_NOT_FOUND";
    ErrorCode[ErrorCode["DATA_CORRUPTION"] = 102] = "DATA_CORRUPTION";
    ErrorCode[ErrorCode["INVALID_ROW_ID"] = 103] = "INVALID_ROW_ID";
    ErrorCode[ErrorCode["INVALID_TX_ACCESS"] = 105] = "INVALID_TX_ACCESS";
    ErrorCode[ErrorCode["OUT_OF_SCOPE"] = 106] = "OUT_OF_SCOPE";
    ErrorCode[ErrorCode["INVALID_TX_STATE"] = 107] = "INVALID_TX_STATE";
    ErrorCode[ErrorCode["INCOMPATIBLE_DB"] = 108] = "INCOMPATIBLE_DB";
    ErrorCode[ErrorCode["ROW_ID_EXISTED"] = 109] = "ROW_ID_EXISTED";
    ErrorCode[ErrorCode["IMPORT_TO_NON_EMPTY_DB"] = 110] = "IMPORT_TO_NON_EMPTY_DB";
    ErrorCode[ErrorCode["DB_MISMATCH"] = 111] = "DB_MISMATCH";
    ErrorCode[ErrorCode["IMPORT_DATA_NOT_FOUND"] = 112] = "IMPORT_DATA_NOT_FOUND";
    ErrorCode[ErrorCode["ALREADY_CONNECTED"] = 113] = "ALREADY_CONNECTED";
    ErrorCode[ErrorCode["CONSTRAINT_ERROR"] = 200] = "CONSTRAINT_ERROR";
    ErrorCode[ErrorCode["DUPLICATE_KEYS"] = 201] = "DUPLICATE_KEYS";
    ErrorCode[ErrorCode["NOT_NULLABLE"] = 202] = "NOT_NULLABLE";
    ErrorCode[ErrorCode["FK_VIOLATION"] = 203] = "FK_VIOLATION";
    ErrorCode[ErrorCode["NOT_SUPPORTED"] = 300] = "NOT_SUPPORTED";
    ErrorCode[ErrorCode["FB_NO_RAW_TX"] = 351] = "FB_NO_RAW_TX";
    ErrorCode[ErrorCode["IDB_NOT_PROVIDED"] = 352] = "IDB_NOT_PROVIDED";
    ErrorCode[ErrorCode["WEBSQL_NOT_PROVIDED"] = 353] = "WEBSQL_NOT_PROVIDED";
    ErrorCode[ErrorCode["CANT_OPEN_WEBSQL_DB"] = 354] = "CANT_OPEN_WEBSQL_DB";
    ErrorCode[ErrorCode["NO_CHANGE_NOTIFICATION"] = 355] = "NO_CHANGE_NOTIFICATION";
    ErrorCode[ErrorCode["NO_WEBSQL_TX"] = 356] = "NO_WEBSQL_TX";
    ErrorCode[ErrorCode["NO_PRED_IN_TOSQL"] = 357] = "NO_PRED_IN_TOSQL";
    ErrorCode[ErrorCode["NOT_IMPL_IN_TOSQL"] = 358] = "NOT_IMPL_IN_TOSQL";
    ErrorCode[ErrorCode["LOCAL_STORAGE_NOT_PROVIDED"] = 359] = "LOCAL_STORAGE_NOT_PROVIDED";
    ErrorCode[ErrorCode["NOT_IMPLEMENTED"] = 360] = "NOT_IMPLEMENTED";
    ErrorCode[ErrorCode["CANT_OPEN_IDB"] = 361] = "CANT_OPEN_IDB";
    ErrorCode[ErrorCode["CANT_READ_IDB"] = 362] = "CANT_READ_IDB";
    ErrorCode[ErrorCode["CANT_LOAD_IDB"] = 363] = "CANT_LOAD_IDB";
    ErrorCode[ErrorCode["SYNTAX_ERROR"] = 500] = "SYNTAX_ERROR";
    ErrorCode[ErrorCode["UNBOUND_VALUE"] = 501] = "UNBOUND_VALUE";
    ErrorCode[ErrorCode["INVALID_NAME"] = 502] = "INVALID_NAME";
    ErrorCode[ErrorCode["NAME_IN_USE"] = 503] = "NAME_IN_USE";
    ErrorCode[ErrorCode["INVALID_AUTO_KEY_TYPE"] = 504] = "INVALID_AUTO_KEY_TYPE";
    ErrorCode[ErrorCode["INVALID_AUTO_KEY_COLUMN"] = 505] = "INVALID_AUTO_KEY_COLUMN";
    ErrorCode[ErrorCode["IMMEDIATE_EVAL_ONLY"] = 506] = "IMMEDIATE_EVAL_ONLY";
    ErrorCode[ErrorCode["COLUMN_NOT_FOUND"] = 508] = "COLUMN_NOT_FOUND";
    ErrorCode[ErrorCode["COLUMN_NOT_INDEXABLE"] = 509] = "COLUMN_NOT_INDEXABLE";
    ErrorCode[ErrorCode["BIND_ARRAY_OUT_OF_RANGE"] = 510] = "BIND_ARRAY_OUT_OF_RANGE";
    ErrorCode[ErrorCode["CANT_GET_IDB_TABLE"] = 511] = "CANT_GET_IDB_TABLE";
    ErrorCode[ErrorCode["CANT_GET_WEBSQL_TABLE"] = 512] = "CANT_GET_WEBSQL_TABLE";
    ErrorCode[ErrorCode["UNKNOWN_QUERY_CONTEXT"] = 513] = "UNKNOWN_QUERY_CONTEXT";
    ErrorCode[ErrorCode["UNKNOWN_NODE_TYPE"] = 514] = "UNKNOWN_NODE_TYPE";
    ErrorCode[ErrorCode["DUPLICATE_FROM"] = 515] = "DUPLICATE_FROM";
    ErrorCode[ErrorCode["DUPLICATE_WHERE"] = 516] = "DUPLICATE_WHERE";
    ErrorCode[ErrorCode["INVALID_DELETE"] = 517] = "INVALID_DELETE";
    ErrorCode[ErrorCode["INVALID_INSERT"] = 518] = "INVALID_INSERT";
    ErrorCode[ErrorCode["INVALID_INSERT_OR_REPLACE"] = 519] = "INVALID_INSERT_OR_REPLACE";
    ErrorCode[ErrorCode["DUPLICATE_INTO"] = 520] = "DUPLICATE_INTO";
    ErrorCode[ErrorCode["DUPLICATE_VALUES"] = 521] = "DUPLICATE_VALUES";
    ErrorCode[ErrorCode["INVALID_SELECT"] = 522] = "INVALID_SELECT";
    ErrorCode[ErrorCode["UNBOUND_LIMIT_SKIP"] = 523] = "UNBOUND_LIMIT_SKIP";
    ErrorCode[ErrorCode["INVALID_DISTINCT"] = 524] = "INVALID_DISTINCT";
    ErrorCode[ErrorCode["INVALID_GROUPBY"] = 525] = "INVALID_GROUPBY";
    ErrorCode[ErrorCode["INVALID_PROJECTION"] = 526] = "INVALID_PROJECTION";
    ErrorCode[ErrorCode["INVALID_AGGREGATION"] = 527] = "INVALID_AGGREGATION";
    ErrorCode[ErrorCode["DUPLICATE_LIMIT"] = 528] = "DUPLICATE_LIMIT";
    ErrorCode[ErrorCode["DUPLICATE_SKIP"] = 529] = "DUPLICATE_SKIP";
    ErrorCode[ErrorCode["DUPLICATE_GROUPBY"] = 530] = "DUPLICATE_GROUPBY";
    ErrorCode[ErrorCode["NEGATIVE_LIMIT_SKIP"] = 531] = "NEGATIVE_LIMIT_SKIP";
    ErrorCode[ErrorCode["INVALID_UPDATE"] = 532] = "INVALID_UPDATE";
    ErrorCode[ErrorCode["FK_LOOP"] = 533] = "FK_LOOP";
    ErrorCode[ErrorCode["FK_COLUMN_IN_USE"] = 534] = "FK_COLUMN_IN_USE";
    ErrorCode[ErrorCode["SCHEMA_FINALIZED"] = 535] = "SCHEMA_FINALIZED";
    ErrorCode[ErrorCode["INVALID_FK_TABLE"] = 536] = "INVALID_FK_TABLE";
    ErrorCode[ErrorCode["INVALID_FK_COLUMN"] = 537] = "INVALID_FK_COLUMN";
    ErrorCode[ErrorCode["INVALID_FK_COLUMN_TYPE"] = 538] = "INVALID_FK_COLUMN_TYPE";
    ErrorCode[ErrorCode["FK_COLUMN_NONUNIQUE"] = 539] = "FK_COLUMN_NONUNIQUE";
    ErrorCode[ErrorCode["INVALID_FK_REF"] = 540] = "INVALID_FK_REF";
    ErrorCode[ErrorCode["INVALID_OUTER_JOIN"] = 541] = "INVALID_OUTER_JOIN";
    ErrorCode[ErrorCode["MISSING_FROM_BEFORE_JOIN"] = 542] = "MISSING_FROM_BEFORE_JOIN";
    ErrorCode[ErrorCode["PK_CANT_BE_FK"] = 543] = "PK_CANT_BE_FK";
    ErrorCode[ErrorCode["DUPLICATE_PK"] = 544] = "DUPLICATE_PK";
    ErrorCode[ErrorCode["NULLABLE_PK"] = 545] = "NULLABLE_PK";
    ErrorCode[ErrorCode["DUPLICATE_NAME"] = 546] = "DUPLICATE_NAME";
    ErrorCode[ErrorCode["INVALID_WHERE"] = 547] = "INVALID_WHERE";
    ErrorCode[ErrorCode["FROM_AFTER_WHERE"] = 548] = "FROM_AFTER_WHERE";
    ErrorCode[ErrorCode["FROM_AFTER_ORDER_GROUPBY"] = 549] = "FROM_AFTER_ORDER_GROUPBY";
    ErrorCode[ErrorCode["INVALID_PREDICATE"] = 550] = "INVALID_PREDICATE";
    ErrorCode[ErrorCode["TEST_ERROR"] = 900] = "TEST_ERROR";
    ErrorCode[ErrorCode["ASSERTION"] = 998] = "ASSERTION";
    ErrorCode[ErrorCode["SIMULATED_ERROR"] = 999] = "SIMULATED_ERROR";
})(ErrorCode || (ErrorCode = {}));
var Favor;
(function (Favor) {
    Favor[Favor["RHS"] = -1] = "RHS";
    Favor[Favor["TIE"] = 0] = "TIE";
    Favor[Favor["LHS"] = 1] = "LHS";
})(Favor || (Favor = {}));
var TableType;
(function (TableType) {
    TableType[TableType["DATA"] = 0] = "DATA";
    TableType[TableType["INDEX"] = 1] = "INDEX";
})(TableType || (TableType = {}));
var ExecType;
(function (ExecType) {
    ExecType[ExecType["NO_CHILD"] = -1] = "NO_CHILD";
    ExecType[ExecType["ALL"] = 0] = "ALL";
    ExecType[ExecType["FIRST_CHILD"] = 1] = "FIRST_CHILD";
})(ExecType || (ExecType = {}));
var LockType;
(function (LockType) {
    LockType[LockType["EXCLUSIVE"] = 0] = "EXCLUSIVE";
    LockType[LockType["RESERVED_READ_ONLY"] = 1] = "RESERVED_READ_ONLY";
    LockType[LockType["RESERVED_READ_WRITE"] = 2] = "RESERVED_READ_WRITE";
    LockType[LockType["SHARED"] = 3] = "SHARED";
})(LockType || (LockType = {}));
var TaskPriority;
(function (TaskPriority) {
    TaskPriority[TaskPriority["EXPORT_TASK"] = 0] = "EXPORT_TASK";
    TaskPriority[TaskPriority["IMPORT_TASK"] = 0] = "IMPORT_TASK";
    TaskPriority[TaskPriority["OBSERVER_QUERY_TASK"] = 0] = "OBSERVER_QUERY_TASK";
    TaskPriority[TaskPriority["EXTERNAL_CHANGE_TASK"] = 1] = "EXTERNAL_CHANGE_TASK";
    TaskPriority[TaskPriority["USER_QUERY_TASK"] = 2] = "USER_QUERY_TASK";
    TaskPriority[TaskPriority["TRANSACTION_TASK"] = 2] = "TRANSACTION_TASK";
})(TaskPriority || (TaskPriority = {}));
var FnType;
(function (FnType) {
    FnType["AVG"] = "AVG";
    FnType["COUNT"] = "COUNT";
    FnType["DISTINCT"] = "DISTINCT";
    FnType["GEOMEAN"] = "GEOMEAN";
    FnType["MAX"] = "MAX";
    FnType["MIN"] = "MIN";
    FnType["STDDEV"] = "STDDEV";
    FnType["SUM"] = "SUM";
})(FnType || (FnType = {}));
var Operator;
(function (Operator) {
    Operator["AND"] = "and";
    Operator["OR"] = "or";
})(Operator || (Operator = {}));
class UnboundKey {
}
class SingleKeyRange {
    static isUnbound(value) {
        return value === SingleKeyRange.UNBOUND_VALUE;
    }
    static upperBound(key, shouldExclude = false) {
        return new SingleKeyRange(SingleKeyRange.UNBOUND_VALUE, key, false, shouldExclude);
    }
    static lowerBound(key, shouldExclude = false) {
        return new SingleKeyRange(key, SingleKeyRange.UNBOUND_VALUE, shouldExclude, false);
    }
    static only(key) {
        return new SingleKeyRange(key, key, false, false);
    }
    static all() {
        return new SingleKeyRange(SingleKeyRange.UNBOUND_VALUE, SingleKeyRange.UNBOUND_VALUE, false, false);
    }
    static xor(a, b) {
        return a ? !b : b;
    }
    static compare(lhs, rhs) {
        let result = SingleKeyRange.compareKey(lhs.from, rhs.from, true, lhs.excludeLower, rhs.excludeLower);
        if (result === Favor.TIE) {
            result = SingleKeyRange.compareKey(lhs.to, rhs.to, false, lhs.excludeUpper, rhs.excludeUpper);
        }
        return result;
    }
    static getBoundingRange(r1, r2) {
        let from = SingleKeyRange.UNBOUND_VALUE;
        let to = SingleKeyRange.UNBOUND_VALUE;
        let excludeLower = false;
        let excludeUpper = false;
        if (!SingleKeyRange.isUnbound(r1.from) &&
            !SingleKeyRange.isUnbound(r2.from)) {
            const favor = SingleKeyRange.compareKey(r1.from, r2.from, true);
            if (favor !== Favor.LHS) {
                from = r1.from;
                excludeLower =
                    favor !== Favor.TIE
                        ? r1.excludeLower
                        : r1.excludeLower && r2.excludeLower;
            }
            else {
                from = r2.from;
                excludeLower = r2.excludeLower;
            }
        }
        if (!SingleKeyRange.isUnbound(r1.to) && !SingleKeyRange.isUnbound(r2.to)) {
            const favor = SingleKeyRange.compareKey(r1.to, r2.to, false);
            if (favor !== Favor.RHS) {
                to = r1.to;
                excludeUpper =
                    favor !== Favor.TIE
                        ? r1.excludeUpper
                        : r1.excludeUpper && r2.excludeUpper;
            }
            else {
                to = r2.to;
                excludeUpper = r2.excludeUpper;
            }
        }
        return new SingleKeyRange(from, to, excludeLower, excludeUpper);
    }
    static and(r1, r2) {
        if (!r1.overlaps(r2)) {
            return null;
        }
        let favor = SingleKeyRange.compareKey(r1.from, r2.from, true);
        const left = favor === Favor.TIE
            ? r1.excludeLower
                ? r1
                : r2
            : favor !== Favor.RHS
                ? r1
                : r2;
        let right;
        if (SingleKeyRange.isUnbound(r1.to) || SingleKeyRange.isUnbound(r2.to)) {
            right = SingleKeyRange.isUnbound(r1.to) ? r2 : r1;
        }
        else {
            favor = SingleKeyRange.compareKey(r1.to, r2.to, false);
            right =
                favor === Favor.TIE
                    ? r1.excludeUpper
                        ? r1
                        : r2
                    : favor === Favor.RHS
                        ? r1
                        : r2;
        }
        return new SingleKeyRange(left.from, right.to, left.excludeLower, right.excludeUpper);
    }
    static complement(keyRanges) {
        if (keyRanges.length === 0) {
            return SingleKeyRange.EMPTY_RANGE;
        }
        keyRanges.sort(SingleKeyRange.compare);
        const complementKeyRanges = new Array(keyRanges.length + 1);
        for (let i = 0; i < complementKeyRanges.length; i++) {
            if (i === 0) {
                complementKeyRanges[i] = SingleKeyRange.upperBound(keyRanges[i].from, true);
            }
            else if (i === complementKeyRanges.length - 1) {
                complementKeyRanges[i] = SingleKeyRange.lowerBound(keyRanges[i - 1].to, true);
            }
            else {
                complementKeyRanges[i] = new SingleKeyRange(keyRanges[i - 1].to, keyRanges[i].from, true, true);
            }
        }
        return complementKeyRanges;
    }
    static compareKey(l, r, isLeftHandSide, excludeL = false, excludeR = false) {
        const flip = (favor) => isLeftHandSide ? favor : favor === Favor.LHS ? Favor.RHS : Favor.LHS;
        const tieLogic = () => !SingleKeyRange.xor(excludeL, excludeR)
            ? Favor.TIE
            : excludeL
                ? flip(Favor.LHS)
                : flip(Favor.RHS);
        if (SingleKeyRange.isUnbound(l)) {
            return !SingleKeyRange.isUnbound(r) ? flip(Favor.RHS) : tieLogic();
        }
        return SingleKeyRange.isUnbound(r)
            ? flip(Favor.LHS)
            : l < r
                ? Favor.RHS
                : l === r
                    ? tieLogic()
                    : Favor.LHS;
    }
    constructor(from, to, excludeLower, excludeUpper) {
        this.from = from;
        this.to = to;
        this.excludeLower = !SingleKeyRange.isUnbound(this.from)
            ? excludeLower
            : false;
        this.excludeUpper = !SingleKeyRange.isUnbound(this.to)
            ? excludeUpper
            : false;
    }
    toString() {
        return ((this.excludeLower ? '(' : '[') +
            (SingleKeyRange.isUnbound(this.from) ? 'unbound' : this.from) +
            ', ' +
            (SingleKeyRange.isUnbound(this.to) ? 'unbound' : this.to) +
            (this.excludeUpper ? ')' : ']'));
    }
    complement() {
        if (this.isAll()) {
            return SingleKeyRange.EMPTY_RANGE;
        }
        let keyRangeLow = null;
        let keyRangeHigh = null;
        if (!SingleKeyRange.isUnbound(this.from)) {
            keyRangeLow = new SingleKeyRange(SingleKeyRange.UNBOUND_VALUE, this.from, false, !this.excludeLower);
        }
        if (!SingleKeyRange.isUnbound(this.to)) {
            keyRangeHigh = new SingleKeyRange(this.to, SingleKeyRange.UNBOUND_VALUE, !this.excludeUpper, false);
        }
        return [keyRangeLow, keyRangeHigh].filter(keyRange => keyRange !== null);
    }
    reverse() {
        return new SingleKeyRange(this.to, this.from, this.excludeUpper, this.excludeLower);
    }
    overlaps(range) {
        const favor = SingleKeyRange.compareKey(this.from, range.from, true, this.excludeLower, range.excludeLower);
        if (favor === Favor.TIE) {
            return true;
        }
        const left = favor === Favor.RHS ? this : range;
        const right = favor === Favor.LHS ? this : range;
        return (SingleKeyRange.isUnbound(left.to) ||
            left.to > right.from ||
            (left.to === right.from && !left.excludeUpper && !right.excludeLower));
    }
    isAll() {
        return (SingleKeyRange.isUnbound(this.from) && SingleKeyRange.isUnbound(this.to));
    }
    isOnly() {
        return (this.from === this.to &&
            !SingleKeyRange.isUnbound(this.from) &&
            !this.excludeLower &&
            !this.excludeUpper);
    }
    contains(key) {
        const left = SingleKeyRange.isUnbound(this.from) ||
            key > this.from ||
            (key === this.from && !this.excludeLower);
        const right = SingleKeyRange.isUnbound(this.to) ||
            key < this.to ||
            (key === this.to && !this.excludeUpper);
        return left && right;
    }
    getBounded(min, max) {
        if ((SingleKeyRange.isUnbound(this.from) && !this.contains(min)) ||
            (SingleKeyRange.isUnbound(this.to) && !this.contains(max))) {
            return null;
        }
        let from = min;
        let to = max;
        let excludeLower = false;
        let excludeUpper = false;
        if (!SingleKeyRange.isUnbound(this.from) && this.from >= min) {
            from = this.from;
            excludeLower = this.excludeLower;
        }
        if (!SingleKeyRange.isUnbound(this.to) && this.to <= max) {
            to = this.to;
            excludeUpper = this.excludeUpper;
        }
        if (from > to || (from === to && (excludeUpper || excludeLower))) {
            return null;
        }
        return new SingleKeyRange(from, to, excludeLower, excludeUpper);
    }
    equals(range) {
        return (this.from === range.from &&
            this.excludeLower === range.excludeLower &&
            this.to === range.to &&
            this.excludeUpper === range.excludeUpper);
    }
}
SingleKeyRange.UNBOUND_VALUE = new UnboundKey();
SingleKeyRange.EMPTY_RANGE = [];
class Row {
    static getNextId() {
        return Row.nextId++;
    }
    static setNextId(nextId) {
        Row.nextId = nextId;
    }
    static setNextIdIfGreater(nextId) {
        Row.nextId = Math.max(Row.nextId, nextId);
    }
    static deserialize(data) {
        return new Row(data.id, data.value);
    }
    static create(payload) {
        return new Row(Row.getNextId(), payload || {});
    }
    static binToHex(buffer) {
        if (buffer === null) {
            return null;
        }
        const uint8Array = new Uint8Array(buffer);
        let s = '';
        uint8Array.forEach(c => {
            const chr = c.toString(16);
            s += chr.length < 2 ? '0' + chr : chr;
        });
        return s;
    }
    static hexToBin(hex) {
        if (hex === null || hex === '') {
            return null;
        }
        if (hex.length % 2 !== 0) {
            hex = '0' + hex;
        }
        const buffer = new ArrayBuffer(hex.length / 2);
        const uint8Array = new Uint8Array(buffer);
        for (let i = 0, j = 0; i < hex.length; i += 2) {
            uint8Array[j++] = Number(`0x${hex.substr(i, 2)}`) & 0xff;
        }
        return buffer;
    }
    constructor(id_, payload) {
        this.id_ = id_;
        this.payload_ = payload || this.defaultPayload();
    }
    id() {
        return this.id_;
    }
    assignRowId(id) {
        this.id_ = id;
    }
    payload() {
        return this.payload_;
    }
    defaultPayload() {
        return {};
    }
    toDbPayload() {
        return this.payload_;
    }
    serialize() {
        return { id: this.id_, value: this.toDbPayload() };
    }
    keyOfIndex(indexName) {
        if (indexName.substr(-1) === '#') {
            return this.id_;
        }
        return null;
    }
}
Row.DUMMY_ID = -1;
Row.nextId = Row.DUMMY_ID + 1;
class DefaultOptions {
    constructor() {
        this.debugMode = false;
        this.memoryOnly = false;
        this.exceptionUrl = DefaultOptions.url;
        this.useGetAll = false;
    }
    errorMessage(code) {
        return code.toString();
    }
}
DefaultOptions.url = 'http://google.github.io/lovefield/error_lookup/src/error_lookup.html?c=';
export class options {
    static set(opt) {
        const options = opt || new DefaultOptions();
        if (typeof options.exceptionUrl !== 'string') {
            options.exceptionUrl = DefaultOptions.url;
        }
        if (typeof options.errorMessage !== 'function') {
            options.errorMessage = (code) => {
                return code.toString();
            };
        }
        Global.get().setOptions(options);
    }
}
class ServiceId {
    constructor(serviceId) {
        this.serviceId = serviceId;
    }
    toString() {
        return this.serviceId;
    }
    getAsType() {
        return {};
    }
}
class Global {
    static get() {
        if (!Global.instance) {
            Global.instance = new Global();
        }
        if (!Global.instance.opt) {
            Global.instance.setOptions(new DefaultOptions());
        }
        return Global.instance;
    }
    constructor() {
        this.services = new Map();
    }
    clear() {
        this.services.clear();
    }
    registerService(serviceId, service) {
        this.services.set(serviceId.toString(), service);
        return service;
    }
    getService(serviceId) {
        const service = this.services.get(serviceId.toString());
        if (!service) {
            throw new Exception(ErrorCode.SERVICE_NOT_FOUND, serviceId.toString());
        }
        return service;
    }
    isRegistered(serviceId) {
        return this.services.has(serviceId.toString());
    }
    listServices() {
        return Array.from(this.services.keys());
    }
    getOptions() {
        return this.opt;
    }
    setOptions(options) {
        this.opt = options;
    }
}
class Exception {
    constructor(code, ...args) {
        this.code = code;
        this.args = args;
        this.message = Global.get().getOptions().exceptionUrl + code.toString();
        if (args.length) {
            for (let i = 0; i < Math.min(4, args.length); ++i) {
                const val = encodeURIComponent(String(args[i]).slice(0, 64));
                if (Global.get().getOptions().exceptionUrl.length) {
                    this.message += `&p${i}=${val}`;
                }
                else {
                    this.message += `|${val}`;
                }
            }
        }
    }
    toString() {
        const template = Global.get()
            .getOptions()
            .errorMessage(this.code) || this.code.toString();
        return template.replace(/{([^}]+)}/g, (match, pattern) => this.args[Number(pattern)]);
    }
}
function assert(condition, message = 'assertion failed') {
    if (Global.get().getOptions().debugMode) {
        if (!condition) {
            throw new Exception(ErrorCode.ASSERTION, message);
        }
    }
}
export function bind(index) {
    return new Binder(index);
}
export class Binder {
    constructor(index) {
        this.index = index;
    }
    getIndex() {
        return this.index;
    }
}
function isSubset(set1, set2) {
    if (set2.size > set1.size) {
        return false;
    }
    let result = true;
    set2.forEach(value => (result = result && set1.has(value)));
    return result;
}
function setEquals(set1, set2) {
    return set1.size === set2.size && isSubset(set1, set2);
}
class ForeignKeySpec {
    constructor(rawSpec, childTable, name) {
        this.childTable = childTable;
        const array = rawSpec.ref.split('.');
        if (array.length !== 2) {
            throw new Exception(ErrorCode.INVALID_FK_REF, name);
        }
        this.childColumn = rawSpec.local;
        this.parentTable = array[0];
        this.parentColumn = array[1];
        this.name = `${childTable}.${name}`;
        this.action = rawSpec.action || ConstraintAction.RESTRICT;
        this.timing = rawSpec.timing || ConstraintTiming.IMMEDIATE;
    }
}
class IndexImpl {
    constructor(tableName, name, isUnique, columns) {
        this.tableName = tableName;
        this.name = name;
        this.isUnique = isUnique;
        this.columns = columns;
    }
    getNormalizedName() {
        return `${this.tableName}.${this.name}`;
    }
    hasNullableColumn() {
        return this.columns.some((column) => column.schema.isNullable());
    }
}
class Constraint {
    constructor(primaryKey, notNullable, foreignKeys) {
        this.primaryKey = primaryKey;
        this.notNullable = notNullable;
        this.foreignKeys = foreignKeys;
    }
    getPrimaryKey() {
        return this.primaryKey;
    }
    getNotNullable() {
        return this.notNullable;
    }
    getForeignKeys() {
        return this.foreignKeys;
    }
}
class RelationEntry {
    static combineEntries(leftEntry, leftEntryTables, rightEntry, rightEntryTables) {
        const result = {};
        const mergeEntry = (entry, entryTables) => {
            if (entry.isPrefixApplied) {
                const payload = entry.row.payload();
                Array.from(Object.keys(payload)).forEach(prefix => {
                    result[prefix] = payload[prefix];
                });
            }
            else {
                assert(!Object.prototype.hasOwnProperty.call(result, entryTables[0]), 'Attempted to join table with itself, without using table alias, ' +
                    'or same alias ' +
                    entryTables[0] +
                    'is reused for multiple tables.');
                result[entryTables[0]] = entry.row.payload();
            }
        };
        mergeEntry(leftEntry, leftEntryTables);
        mergeEntry(rightEntry, rightEntryTables);
        const row = new Row(Row.DUMMY_ID, result);
        return new RelationEntry(row, true);
    }
    static getNextId() {
        return RelationEntry.nextId++;
    }
    constructor(row, isPrefixApplied) {
        this.row = row;
        this.isPrefixApplied = isPrefixApplied;
        this.id = RelationEntry.getNextId();
    }
    getField(col) {
        const column = col;
        const alias = column.getAlias();
        if (alias !== null &&
            Object.prototype.hasOwnProperty.call(this.row.payload(), alias)) {
            return this.row.payload()[alias];
        }
        if (this.isPrefixApplied) {
            return this.row.payload()[column.getTable().getEffectiveName()][column.getName()];
        }
        else {
            return this.row.payload()[column.getName()];
        }
    }
    setField(col, value) {
        const column = col;
        const alias = column.getAlias();
        if (alias !== null) {
            this.row.payload()[alias] = value;
            return;
        }
        if (this.isPrefixApplied) {
            const tableName = column.getTable().getEffectiveName();
            let containerObj = this.row.payload()[tableName];
            if (!(containerObj !== undefined && containerObj !== null)) {
                containerObj = {};
                this.row.payload()[tableName] = containerObj;
            }
            containerObj[column.getName()] = value;
        }
        else {
            this.row.payload()[column.getName()] = value;
        }
    }
}
RelationEntry.nextId = 0;
class Relation {
    static createEmpty() {
        if (Relation.emptyRelation === null) {
            Relation.emptyRelation = new Relation([], []);
        }
        return Relation.emptyRelation;
    }
    static intersect(relations) {
        if (relations.length === 0) {
            return Relation.createEmpty();
        }
        const totalCount = relations.reduce((soFar, relation) => {
            Relation.assertCompatible(relations[0], relation);
            return soFar + relation.entries.length;
        }, 0);
        const allEntries = new Array(totalCount);
        let entryCounter = 0;
        const relationMaps = relations.map(relation => {
            const map = new Map();
            relation.entries.forEach(entry => {
                allEntries[entryCounter++] = entry;
                map.set(entry.id, entry);
            });
            return map;
        });
        const intersection = new Map();
        allEntries.forEach(entry => {
            const existsInAll = relationMaps.every(relation => relation.has(entry.id));
            if (existsInAll) {
                intersection.set(entry.id, entry);
            }
        });
        return new Relation(Array.from(intersection.values()), Array.from(relations[0].tables.values()));
    }
    static union(relations) {
        if (relations.length === 0) {
            return Relation.createEmpty();
        }
        const union = new Map();
        relations.forEach(relation => {
            Relation.assertCompatible(relations[0], relation);
            relation.entries.forEach(entry => union.set(entry.id, entry));
        });
        return new Relation(Array.from(union.values()), Array.from(relations[0].tables.values()));
    }
    static fromRows(rows, tables) {
        const isPrefixApplied = tables.length > 1;
        const entries = rows.map(row => new RelationEntry(row, isPrefixApplied));
        return new Relation(entries, tables);
    }
    static assertCompatible(lhs, rhs) {
        assert(lhs.isCompatible(rhs), 'Intersection/union operations only apply to compatible relations.');
    }
    constructor(entries, tables) {
        this.entries = entries;
        this.tables = new Set(tables);
        this.aggregationResults = null;
    }
    isCompatible(relation) {
        return setEquals(this.tables, relation.tables);
    }
    getTables() {
        return Array.from(this.tables.values());
    }
    isPrefixApplied() {
        return this.tables.size > 1;
    }
    getPayloads() {
        return this.entries.map(entry => entry.row.payload());
    }
    getRowIds() {
        return this.entries.map(entry => entry.row.id());
    }
    setAggregationResult(column, result) {
        if (this.aggregationResults === null) {
            this.aggregationResults = new Map();
        }
        this.aggregationResults.set(column.getNormalizedName(), result);
    }
    getAggregationResult(column) {
        assert(this.aggregationResults !== null, 'getAggregationResult called before any results have been calculated.');
        const colName = column.getNormalizedName();
        const result = this.aggregationResults.get(colName);
        assert(result !== undefined, `Could not find result for ${colName}`);
        return result;
    }
    hasAggregationResult(column) {
        return (this.aggregationResults !== null &&
            this.aggregationResults.has(column.getNormalizedName()));
    }
}
Relation.emptyRelation = null;
class IndexStats {
    constructor() {
        this.totalRows = 0;
        this.maxKeyEncountered = 0;
    }
    add(key, rowCount) {
        this.totalRows += rowCount;
        this.maxKeyEncountered =
            this.maxKeyEncountered === null
                ? key
                : key > this.maxKeyEncountered
                    ? key
                    : this.maxKeyEncountered;
    }
    remove(key, removedCount) {
        this.totalRows -= removedCount;
    }
    clear() {
        this.totalRows = 0;
    }
    updateFromList(statsList) {
        this.clear();
        statsList.forEach(stats => (this.totalRows += stats.totalRows));
    }
}
class UniqueId {
    getUniqueId() {
        if (this.uniqueId === undefined) {
            this.uniqueId = `lf_${this.getUniqueNumber()}`;
        }
        return this.uniqueId;
    }
    getUniqueNumber() {
        if (this.uniqueNumber === undefined) {
            this.uniqueNumber = ++UniqueId.nextId;
        }
        return this.uniqueNumber;
    }
}
UniqueId.nextId = 0;
class TreeNode {
    constructor() {
        this.parent = null;
        this.children = null;
    }
    getParent() {
        return this.parent;
    }
    setParent(parentNode) {
        this.parent = parentNode;
    }
    getRoot() {
        let root = this;
        while (root.parent !== null) {
            root = root.parent;
        }
        return root;
    }
    getDepth() {
        let depth = 0;
        let node = this;
        while (node.parent !== null) {
            depth++;
            node = node.parent;
        }
        return depth;
    }
    isLeaf() {
        return this.children === null;
    }
    getChildren() {
        return this.children || TreeNode.EMPTY_ARRAY;
    }
    getChildAt(index) {
        return this.children && index >= 0 && index < this.children.length
            ? this.getChildren()[index]
            : null;
    }
    getChildCount() {
        return this.getChildren().length;
    }
    addChildAt(child, index) {
        assert(child.parent === null);
        child.parent = this;
        if (this.children === null) {
            this.children = [child];
        }
        else {
            assert(index >= 0 && index <= this.children.length);
            this.children.splice(index, 0, child);
        }
    }
    addChild(child) {
        assert(child.parent === null);
        child.parent = this;
        if (this.children === null) {
            this.children = [child];
        }
        else {
            this.children.push(child);
        }
    }
    removeChildAt(index) {
        if (this.children) {
            const child = this.children[index];
            if (child) {
                child.parent = null;
                this.children.splice(index, 1);
                if (this.children.length === 0) {
                    this.children = null;
                }
                return child;
            }
        }
        return null;
    }
    removeChild(child) {
        return this.children
            ? this.removeChildAt(this.children.indexOf(child))
            : null;
    }
    replaceChildAt(newChild, index) {
        assert(newChild.parent === null);
        if (this.children) {
            const oldChild = this.getChildAt(index);
            if (oldChild) {
                oldChild.parent = null;
                newChild.parent = this;
                this.children[index] = newChild;
                return oldChild;
            }
        }
        return null;
    }
    traverse(f) {
        if (f(this) !== false) {
            this.getChildren().forEach(child => child.traverse(f));
        }
    }
}
TreeNode.EMPTY_ARRAY = [];
class PredicateNode extends TreeNode {
    constructor() {
        super();
        this.id = PredicateNode.nextId++;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
PredicateNode.nextId = 0;
var EvalType;
(function (EvalType) {
    EvalType["BETWEEN"] = "between";
    EvalType["EQ"] = "eq";
    EvalType["GTE"] = "gte";
    EvalType["GT"] = "gt";
    EvalType["IN"] = "in";
    EvalType["LTE"] = "lte";
    EvalType["LT"] = "lt";
    EvalType["MATCH"] = "match";
    EvalType["NEQ"] = "neq";
})(EvalType || (EvalType = {}));
function identity(value) {
    return value;
}
function buildKeyOfIndexConversionMap() {
    const map = new Map();
    map.set(Type.BOOLEAN, ((value) => {
        return value === null ? null : value ? 1 : 0;
    }));
    map.set(Type.DATE_TIME, ((value) => {
        return value === null ? null : value.getTime();
    }));
    map.set(Type.INTEGER, identity);
    map.set(Type.NUMBER, identity);
    map.set(Type.STRING, identity);
    return map;
}
function buildBooleanEvaluatorMap() {
    const map = new Map();
    map.set(EvalType.EQ, (a, b) => a === b);
    map.set(EvalType.NEQ, (a, b) => a !== b);
    return map;
}
function buildCommonEvaluatorMap() {
    const map = buildBooleanEvaluatorMap();
    map.set(EvalType.BETWEEN, (a, range) => {
        return a === null || range[0] === null || range[1] === null
            ? false
            : a >= range[0] && a <= range[1];
    });
    map.set(EvalType.GTE, (a, b) => {
        return a === null || b === null ? false : a >= b;
    });
    map.set(EvalType.GT, (a, b) => {
        return a === null || b === null ? false : a > b;
    });
    map.set(EvalType.IN, (rowValue, values) => {
        return values.indexOf(rowValue) !== -1;
    });
    map.set(EvalType.LTE, (a, b) => {
        return a === null || b === null ? false : a <= b;
    });
    map.set(EvalType.LT, (a, b) => {
        return a === null || b === null ? false : a < b;
    });
    return map;
}
const buildNumberEvaluatorMap = buildCommonEvaluatorMap;
function buildStringEvaluatorMap() {
    const map = buildCommonEvaluatorMap();
    map.set(EvalType.MATCH, (value, regex) => {
        if (value === null || regex === null) {
            return false;
        }
        const re = new RegExp(regex);
        return re.test(value);
    });
    return map;
}
function buildObjectEvaluatorMap() {
    const map = new Map();
    const checkNull = (value) => {
        if (value !== null) {
            throw new Exception(ErrorCode.INVALID_PREDICATE);
        }
    };
    map.set(EvalType.EQ, (a, b) => {
        checkNull(b);
        return a === null;
    });
    map.set(EvalType.NEQ, (a, b) => {
        checkNull(b);
        return a !== null;
    });
    return map;
}
function buildDateEvaluatorMap() {
    const map = new Map();
    map.set(EvalType.BETWEEN, (a, range) => {
        return a === null || range[0] === null || range[1] === null
            ? false
            : a.getTime() >= range[0].getTime() && a.getTime() <= range[1].getTime();
    });
    map.set(EvalType.EQ, (a, b) => {
        const aTime = a === null ? -1 : a.getTime();
        const bTime = b === null ? -1 : b.getTime();
        return aTime === bTime;
    });
    map.set(EvalType.GTE, (a, b) => {
        return a === null || b === null ? false : a.getTime() >= b.getTime();
    });
    map.set(EvalType.GT, (a, b) => {
        return a === null || b === null ? false : a.getTime() > b.getTime();
    });
    map.set(EvalType.IN, (targetValue, values) => {
        return values.some(value => value.getTime() === targetValue.getTime());
    });
    map.set(EvalType.LTE, (a, b) => {
        return a === null || b === null ? false : a.getTime() <= b.getTime();
    });
    map.set(EvalType.LT, (a, b) => {
        return a === null || b === null ? false : a.getTime() < b.getTime();
    });
    map.set(EvalType.NEQ, (a, b) => {
        const aTime = a === null ? -1 : a.getTime();
        const bTime = b === null ? -1 : b.getTime();
        return aTime !== bTime;
    });
    return map;
}
class EvalRegistry {
    static get() {
        EvalRegistry.instance = EvalRegistry.instance || new EvalRegistry();
        return EvalRegistry.instance;
    }
    constructor() {
        this.keyOfIndexConversionMap = buildKeyOfIndexConversionMap();
        this.evalMaps = new Map();
        const numberOrIntegerEvalMap = buildNumberEvaluatorMap();
        this.evalMaps.set(Type.BOOLEAN, buildBooleanEvaluatorMap());
        this.evalMaps.set(Type.DATE_TIME, buildDateEvaluatorMap());
        this.evalMaps.set(Type.NUMBER, numberOrIntegerEvalMap);
        this.evalMaps.set(Type.INTEGER, numberOrIntegerEvalMap);
        this.evalMaps.set(Type.STRING, buildStringEvaluatorMap());
        this.evalMaps.set(Type.OBJECT, buildObjectEvaluatorMap());
    }
    getEvaluator(columnType, evaluatorType) {
        const evaluationMap = this.evalMaps.get(columnType) || null;
        if (evaluationMap === null) {
            throw new Exception(ErrorCode.INVALID_PREDICATE);
        }
        const evaluatorFn = evaluationMap.get(evaluatorType) || null;
        if (evaluatorFn === null) {
            throw new Exception(ErrorCode.INVALID_PREDICATE);
        }
        return evaluatorFn;
    }
    getKeyOfIndexEvaluator(columnType) {
        const fn = this.keyOfIndexConversionMap.get(columnType) || null;
        if (fn === null) {
            throw new Exception(ErrorCode.NOT_SUPPORTED);
        }
        return fn;
    }
}
class SingleKeyRangeSet {
    static intersect(s0, s1) {
        const ranges = s0.getValues().map(r0 => {
            return s1.getValues().map(r1 => SingleKeyRange.and(r0, r1));
        });
        let results = [];
        ranges.forEach(dimension => (results = results.concat(dimension)));
        return new SingleKeyRangeSet(results.filter(r => r !== null));
    }
    constructor(ranges) {
        this.ranges = [];
        if (ranges) {
            this.add(ranges);
        }
    }
    toString() {
        return this.ranges.map(r => r.toString()).join(',');
    }
    containsKey(key) {
        return this.ranges.some(r => r.contains(key));
    }
    getValues() {
        return this.ranges;
    }
    add(keyRanges) {
        if (keyRanges.length === 0) {
            return;
        }
        const ranges = this.ranges.concat(keyRanges);
        if (ranges.length === 1) {
            this.ranges = ranges;
            return;
        }
        ranges.sort(SingleKeyRange.compare);
        const results = [];
        let start = ranges[0];
        for (let i = 1; i < ranges.length; ++i) {
            if (start.overlaps(ranges[i])) {
                start = SingleKeyRange.getBoundingRange(start, ranges[i]);
            }
            else {
                results.push(start);
                start = ranges[i];
            }
        }
        results.push(start);
        this.ranges = results;
    }
    equals(set) {
        if (this.ranges.length === set.ranges.length) {
            return (this.ranges.length === 0 ||
                this.ranges.every((r, index) => r.equals(set.ranges[index])));
        }
        return false;
    }
    getBoundingRange() {
        if (this.ranges.length <= 1) {
            return this.ranges.length === 0 ? null : this.ranges[0];
        }
        const last = this.ranges.length - 1;
        return SingleKeyRange.getBoundingRange(this.ranges[0], this.ranges[last]);
    }
}
class ValuePredicate extends PredicateNode {
    constructor(column, value, evaluatorType) {
        super();
        this.column = column;
        this.value = value;
        this.evaluatorType = evaluatorType;
        this.evaluatorFn = EvalRegistry.get().getEvaluator(this.column.getType(), this.evaluatorType);
        this.isComplement = false;
        this.binder = value;
    }
    eval(relation) {
        this.checkBinding();
        if (this.evaluatorType === EvalType.IN) {
            return this.evalAsIn(relation);
        }
        const entries = relation.entries.filter(entry => {
            return (this.evaluatorFn(entry.getField(this.column), this.value) !==
                this.isComplement);
        });
        return new Relation(entries, relation.getTables());
    }
    setComplement(isComplement) {
        this.isComplement = isComplement;
    }
    copy() {
        const clone = new ValuePredicate(this.column, this.value, this.evaluatorType);
        clone.binder = this.binder;
        clone.isComplement = this.isComplement;
        clone.setId(this.getId());
        return clone;
    }
    getColumns(results) {
        if (results) {
            results.push(this.column);
            return results;
        }
        return [this.column];
    }
    getTables(results) {
        const tables = results ? results : new Set();
        tables.add(this.column.getTable());
        return tables;
    }
    setBinder(binder) {
        this.binder = binder;
    }
    bind(values) {
        const checkIndexWithinRange = (index) => {
            if (values.length <= index) {
                throw new Exception(ErrorCode.BIND_ARRAY_OUT_OF_RANGE);
            }
        };
        if (this.binder instanceof Binder) {
            const index = this.binder.index;
            checkIndexWithinRange(index);
            this.value = values[index];
        }
        else if (Array.isArray(this.binder)) {
            const array = this.binder;
            this.value = array.map(val => {
                if (val instanceof Binder) {
                    checkIndexWithinRange(val.index);
                    return values[val.index];
                }
                else {
                    return val;
                }
            });
        }
    }
    toString() {
        return ('value_pred(' +
            this.column.getNormalizedName() +
            ' ' +
            this.evaluatorType +
            (this.isComplement ? '(complement)' : '') +
            ' ' +
            this.value +
            ')');
    }
    peek() {
        return this.value;
    }
    isKeyRangeCompatible() {
        this.checkBinding();
        return (this.value !== null &&
            (this.evaluatorType === EvalType.BETWEEN ||
                this.evaluatorType === EvalType.IN ||
                this.evaluatorType === EvalType.EQ ||
                this.evaluatorType === EvalType.GT ||
                this.evaluatorType === EvalType.GTE ||
                this.evaluatorType === EvalType.LT ||
                this.evaluatorType === EvalType.LTE));
    }
    toKeyRange() {
        assert(this.isKeyRangeCompatible(), 'Could not convert predicate to key range.');
        let keyRange = null;
        if (this.evaluatorType === EvalType.BETWEEN) {
            const val = this.value;
            keyRange = new SingleKeyRange(this.getValueAsKey(val[0]), this.getValueAsKey(val[1]), false, false);
        }
        else if (this.evaluatorType === EvalType.IN) {
            const val = this.value;
            const keyRanges = val.map(v => SingleKeyRange.only(v));
            return new SingleKeyRangeSet(this.isComplement ? SingleKeyRange.complement(keyRanges) : keyRanges);
        }
        else {
            const value = this.getValueAsKey(this.value);
            if (this.evaluatorType === EvalType.EQ) {
                keyRange = SingleKeyRange.only(value);
            }
            else if (this.evaluatorType === EvalType.GTE) {
                keyRange = SingleKeyRange.lowerBound(value);
            }
            else if (this.evaluatorType === EvalType.GT) {
                keyRange = SingleKeyRange.lowerBound(value, true);
            }
            else if (this.evaluatorType === EvalType.LTE) {
                keyRange = SingleKeyRange.upperBound(value);
            }
            else {
                keyRange = SingleKeyRange.upperBound(value, true);
            }
        }
        return new SingleKeyRangeSet(this.isComplement ? keyRange.complement() : [keyRange]);
    }
    checkBinding() {
        let bound = false;
        if (!(this.value instanceof Binder)) {
            if (Array.isArray(this.value)) {
                const array = this.value;
                bound = !array.some(val => val instanceof Binder);
            }
            else {
                bound = true;
            }
        }
        if (!bound) {
            throw new Exception(ErrorCode.UNBOUND_VALUE);
        }
    }
    evalAsIn(relation) {
        assert(this.evaluatorType === EvalType.IN, 'ValuePredicate#evalAsIn_() called for wrong predicate type.');
        const valueSet = new Set(this.value);
        const evaluatorFn = (rowValue) => {
            return rowValue === null
                ? false
                : valueSet.has(rowValue) !== this.isComplement;
        };
        const entries = relation.entries.filter(entry => evaluatorFn(entry.getField(this.column)));
        return new Relation(entries, relation.getTables());
    }
    getValueAsKey(value) {
        if (this.column.getType() === Type.DATE_TIME) {
            return value.getTime();
        }
        return value;
    }
}
class Context extends UniqueId {
    static buildPredicateMap(rootPredicate) {
        const predicateMap = new Map();
        rootPredicate.traverse(n => {
            const node = n;
            predicateMap.set(node.getId(), node);
        });
        return predicateMap;
    }
    constructor(schema) {
        super();
        this.schema = schema;
        this.clonedFrom = null;
        this.where = null;
        this.predicateMap = null;
    }
    getPredicate(id) {
        if (this.predicateMap === null && this.where !== null) {
            this.predicateMap = Context.buildPredicateMap(this.where);
        }
        const predicate = this.predicateMap.get(id);
        assert(predicate !== undefined);
        return predicate;
    }
    bind(values) {
        assert(this.clonedFrom === null);
        return this;
    }
    bindValuesInSearchCondition(values) {
        const searchCondition = this.where;
        if (searchCondition !== null) {
            searchCondition.traverse(node => {
                if (node instanceof ValuePredicate) {
                    node.bind(values);
                }
            });
        }
    }
    cloneBase(context) {
        if (context.where) {
            this.where = context.where.copy();
        }
        this.clonedFrom = context;
    }
}
class PhysicalQueryPlanNode extends TreeNode {
    constructor(numRelations, execType) {
        super();
        this.numRelations = numRelations;
        this.execType = execType;
    }
    exec(journal, context) {
        switch (this.execType) {
            case ExecType.FIRST_CHILD:
                return this.execFirstChild(journal, context);
            case ExecType.ALL:
                return this.execAllChildren(journal, context);
            default:
                return this.execNoChild(journal, context);
        }
    }
    toString() {
        return 'dummy_node';
    }
    toContextString(context) {
        return this.toString();
    }
    assertInput(relations) {
        assert(this.numRelations === PhysicalQueryPlanNode.ANY ||
            relations.length === this.numRelations);
    }
    execNoChild(journal, context) {
        return new Promise(resolve => {
            resolve(this.execInternal([], journal, context));
        });
    }
    execFirstChild(journal, context) {
        return this.getChildAt(0)
            .exec(journal, context)
            .then(results => {
            this.assertInput(results);
            return this.execInternal(results, journal, context);
        });
    }
    execAllChildren(journal, context) {
        const promises = this.getChildren().map(child => {
            return child.exec(journal, context);
        });
        return Promise.all(promises).then(results => {
            const relations = [];
            results.forEach(result => {
                result.forEach(res => relations.push(res));
            });
            this.assertInput(relations);
            return this.execInternal(relations, journal, context);
        });
    }
}
PhysicalQueryPlanNode.ANY = -1;
class PhysicalQueryPlan {
    static getCombinedScope(plans) {
        const tableSet = new Set();
        plans.forEach(plan => {
            plan.getScope().forEach(tableSet.add.bind(tableSet));
        });
        return tableSet;
    }
    constructor(rootNode, scope) {
        this.rootNode = rootNode;
        this.scope = scope;
    }
    getRoot() {
        return this.rootNode;
    }
    getScope() {
        return this.scope;
    }
}
class LockTableEntry {
    constructor() {
        this.exclusiveLock = null;
        this.reservedReadWriteLock = null;
        this.reservedReadOnlyLocks = null;
        this.sharedLocks = null;
    }
    releaseLock(taskId) {
        if (this.exclusiveLock === taskId) {
            this.exclusiveLock = null;
        }
        if (this.reservedReadWriteLock === taskId) {
            this.reservedReadWriteLock = null;
        }
        if (this.reservedReadOnlyLocks) {
            this.reservedReadOnlyLocks.delete(taskId);
        }
        if (this.sharedLocks) {
            this.sharedLocks.delete(taskId);
        }
    }
    canAcquireLock(taskId, lockType) {
        const noReservedReadOnlyLocksExist = this.reservedReadOnlyLocks === null ||
            this.reservedReadOnlyLocks.size === 0;
        if (lockType === LockType.EXCLUSIVE) {
            const noSharedLocksExist = this.sharedLocks === null || this.sharedLocks.size === 0;
            return (noSharedLocksExist &&
                noReservedReadOnlyLocksExist &&
                this.exclusiveLock === null &&
                this.reservedReadWriteLock !== null &&
                this.reservedReadWriteLock === taskId);
        }
        else if (lockType === LockType.SHARED) {
            return (this.exclusiveLock === null &&
                this.reservedReadWriteLock === null &&
                this.reservedReadOnlyLocks !== null &&
                this.reservedReadOnlyLocks.has(taskId));
        }
        else if (lockType === LockType.RESERVED_READ_ONLY) {
            return this.reservedReadWriteLock === null;
        }
        else {
            return (noReservedReadOnlyLocksExist &&
                (this.reservedReadWriteLock === null ||
                    this.reservedReadWriteLock === taskId));
        }
    }
    grantLock(taskId, lockType) {
        if (lockType === LockType.EXCLUSIVE) {
            this.reservedReadWriteLock = null;
            this.exclusiveLock = taskId;
        }
        else if (lockType === LockType.SHARED) {
            if (this.sharedLocks === null) {
                this.sharedLocks = new Set();
            }
            this.sharedLocks.add(taskId);
            if (this.reservedReadOnlyLocks === null) {
                this.reservedReadOnlyLocks = new Set();
            }
            this.reservedReadOnlyLocks.delete(taskId);
        }
        else if (lockType === LockType.RESERVED_READ_ONLY) {
            if (this.reservedReadOnlyLocks === null) {
                this.reservedReadOnlyLocks = new Set();
            }
            this.reservedReadOnlyLocks.add(taskId);
        }
        else if (lockType === LockType.RESERVED_READ_WRITE) {
            this.reservedReadWriteLock = taskId;
        }
    }
}
class LockManager {
    constructor() {
        this.lockTable = new Map();
    }
    requestLock(taskId, dataItems, lockType) {
        const canAcquireLock = this.canAcquireLock(taskId, dataItems, lockType);
        if (canAcquireLock) {
            this.grantLock(taskId, dataItems, lockType);
        }
        return canAcquireLock;
    }
    releaseLock(taskId, dataItems) {
        dataItems.forEach(dataItem => this.getEntry(dataItem).releaseLock(taskId));
    }
    clearReservedLocks(dataItems) {
        dataItems.forEach(dataItem => (this.getEntry(dataItem).reservedReadWriteLock = null));
    }
    getEntry(dataItem) {
        let lockTableEntry = this.lockTable.get(dataItem.getName()) || null;
        if (lockTableEntry === null) {
            lockTableEntry = new LockTableEntry();
            this.lockTable.set(dataItem.getName(), lockTableEntry);
        }
        return lockTableEntry;
    }
    grantLock(taskId, dataItems, lockType) {
        dataItems.forEach(dataItem => this.getEntry(dataItem).grantLock(taskId, lockType));
    }
    canAcquireLock(taskId, dataItems, lockType) {
        let canAcquireLock = true;
        dataItems.forEach(dataItem => {
            if (canAcquireLock) {
                const lockTableEntry = this.getEntry(dataItem);
                canAcquireLock = lockTableEntry.canAcquireLock(taskId, lockType);
            }
        }, this);
        return canAcquireLock;
    }
}
class Resolver {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolveFn = resolve;
            this.rejectFn = reject;
        });
    }
    resolve(value) {
        this.resolveFn(value);
    }
    reject(reason) {
        this.rejectFn(reason);
    }
}
class ArrayHelper {
    static binaryInsert(arr, value, comparator) {
        const index = ArrayHelper.binarySearch(arr, value, comparator);
        if (index < 0) {
            arr.splice(-(index + 1), 0, value);
            return true;
        }
        return false;
    }
    static binaryRemove(arr, value, comparator) {
        const index = ArrayHelper.binarySearch(arr, value, comparator);
        if (index < 0) {
            return false;
        }
        arr.splice(index, 1);
        return true;
    }
    static shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    static clone(arr) {
        const length = arr.length;
        if (length > 0) {
            const rv = new Array(length);
            arr.forEach((v, i) => (rv[i] = v));
            return rv;
        }
        return [];
    }
    static flatten(...arr) {
        const CHUNK_SIZE = 8192;
        const result = [];
        arr.forEach(element => {
            if (Array.isArray(element)) {
                for (let c = 0; c < element.length; c += CHUNK_SIZE) {
                    const chunk = element.slice(c, c + CHUNK_SIZE);
                    const recurseResult = ArrayHelper.flatten.apply(null, chunk);
                    recurseResult.forEach((r) => result.push(r));
                }
            }
            else {
                result.push(element);
            }
        });
        return result;
    }
    static product(arrays) {
        const someArrayEmpty = arrays.some(arr => !arr.length);
        if (someArrayEmpty || arrays.length === 0) {
            return [];
        }
        let indices = new Array(arrays.length);
        indices.fill(0);
        const result = [];
        while (indices !== null) {
            result.push(indices.map((valueIndex, arrayIndex) => arrays[arrayIndex][valueIndex]));
            for (let i = indices.length - 1; i >= 0; i--) {
                assert(indices !== null);
                if (indices[i] < arrays[i].length - 1) {
                    indices[i]++;
                    break;
                }
                if (i === 0) {
                    indices = null;
                    break;
                }
                indices[i] = 0;
            }
        }
        return result;
    }
    static bucket(arr, sorter) {
        const bucket = {};
        arr.forEach(v => {
            const key = sorter(v);
            if (bucket[key] === undefined) {
                bucket[key] = [];
            }
            bucket[key].push(v);
        });
        return bucket;
    }
    static binarySearch(arr, value, comparator) {
        let left = 0;
        let right = arr.length;
        const comp = comparator ||
            ArrayHelper.defaultComparator;
        while (left < right) {
            const middle = (left + right) >> 1;
            if (comp(arr[middle], value) < 0) {
                left = middle + 1;
            }
            else {
                right = middle;
            }
        }
        return left === right && arr[left] === value ? left : ~left;
    }
    static defaultComparator(lhs, rhs) {
        return lhs - rhs;
    }
}
class TaskQueue {
    constructor() {
        this.queue = [];
    }
    insert(task) {
        ArrayHelper.binaryInsert(this.queue, task, (t1, t2) => {
            const priorityDiff = t1.getPriority() - t2.getPriority();
            return priorityDiff === 0 ? t1.getId() - t2.getId() : priorityDiff;
        });
    }
    getValues() {
        return this.queue.slice();
    }
    remove(task) {
        const i = this.queue.indexOf(task);
        if (i >= 0) {
            this.queue.splice(i, 1);
        }
        return i >= 0;
    }
}
class Runner {
    constructor() {
        this.queue = new TaskQueue();
        this.lockManager = new LockManager();
    }
    scheduleTask(task) {
        if (task.getPriority() < TaskPriority.USER_QUERY_TASK ||
            task.getPriority() < TaskPriority.TRANSACTION_TASK) {
            this.lockManager.clearReservedLocks(task.getScope());
        }
        this.queue.insert(task);
        this.consumePending();
        return task.getResolver().promise;
    }
    consumePending() {
        const queue = this.queue.getValues();
        queue.forEach(task => {
            let acquiredLock = false;
            if (task.getType() === TransactionType.READ_ONLY) {
                acquiredLock = this.requestTwoPhaseLock(task, LockType.RESERVED_READ_ONLY, LockType.SHARED);
            }
            else {
                acquiredLock = this.requestTwoPhaseLock(task, LockType.RESERVED_READ_WRITE, LockType.EXCLUSIVE);
            }
            if (acquiredLock) {
                this.queue.remove(task);
                this.execTask(task);
            }
        });
    }
    requestTwoPhaseLock(task, lockType1, lockType2) {
        let acquiredLock = false;
        const acquiredFirstLock = this.lockManager.requestLock(task.getId(), task.getScope(), lockType1);
        if (acquiredFirstLock) {
            acquiredLock = this.lockManager.requestLock(task.getId(), task.getScope(), lockType2);
        }
        return acquiredLock;
    }
    execTask(task) {
        task
            .exec()
            .then(this.onTaskSuccess.bind(this, task), this.onTaskError.bind(this, task));
    }
    onTaskSuccess(task, results) {
        this.lockManager.releaseLock(task.getId(), task.getScope());
        task.getResolver().resolve(results);
        this.consumePending();
    }
    onTaskError(task, error) {
        this.lockManager.releaseLock(task.getId(), task.getScope());
        task.getResolver().reject(error);
        this.consumePending();
    }
}
class NonPredicateProvider {
    eq(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    neq(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    lt(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    lte(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    gt(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    gte(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    match(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    between(from, to) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    in(values) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    isNull() {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    isNotNull() {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
}
class AggregatedColumn extends NonPredicateProvider {
    constructor(child, aggregatorType) {
        super();
        this.child = child;
        this.aggregatorType = aggregatorType;
        this.alias = null;
    }
    getName() {
        return `${this.aggregatorType}(${this.child.getName()})`;
    }
    getNormalizedName() {
        return `${this.aggregatorType}(${this.child.getNormalizedName()})`;
    }
    getTable() {
        return this.child.getTable();
    }
    toString() {
        return this.getNormalizedName();
    }
    getType() {
        return this.child.getType();
    }
    getAlias() {
        return this.alias;
    }
    getIndices() {
        return [];
    }
    getIndex() {
        return null;
    }
    isNullable() {
        return false;
    }
    isUnique() {
        return false;
    }
    as(name) {
        this.alias = name;
        return this;
    }
    getColumnChain() {
        const columnChain = [this];
        let currentColumn = this;
        while (currentColumn instanceof AggregatedColumn) {
            columnChain.push(currentColumn.child);
            currentColumn = currentColumn.child;
        }
        return columnChain;
    }
}
class TreeHelper {
    static map(origTree, mapFn) {
        const copyParentStack = [];
        const cleanUpParentStack = (original, clone) => {
            if (original === null) {
                return;
            }
            const cloneFull = original.getChildCount() === clone.getChildCount();
            if (cloneFull) {
                const cloneIndex = copyParentStack.indexOf(clone);
                if (cloneIndex !== -1) {
                    copyParentStack.splice(cloneIndex, 1);
                }
            }
        };
        let nextParent = null;
        let copyRoot = null;
        origTree.traverse(node => {
            const newNode = mapFn(node);
            if (node.getParent() === null) {
                copyRoot = newNode;
            }
            else {
                nextParent.addChild(newNode);
            }
            cleanUpParentStack(node.getParent(), nextParent);
            if (node.getChildCount() > 1) {
                copyParentStack.push(newNode);
            }
            nextParent = node.isLeaf()
                ? copyParentStack[copyParentStack.length - 1]
                : newNode;
        });
        return copyRoot;
    }
    static getLeafNodes(node) {
        return TreeHelper.find(node, n => n.isLeaf());
    }
    static removeNode(node) {
        const parentNode = node.getParent();
        let originalIndex = 0;
        if (parentNode !== null) {
            originalIndex = parentNode.getChildren().indexOf(node);
            parentNode.removeChild(node);
        }
        const children = node.getChildren().slice();
        children.forEach((child, index) => {
            node.removeChild(child);
            if (parentNode !== null) {
                parentNode.addChildAt(child, originalIndex + index);
            }
        });
        return {
            children,
            parent: parentNode,
        };
    }
    static insertNodeAt(existingNode, newNode) {
        const children = existingNode.getChildren().slice();
        children.forEach(child => {
            existingNode.removeChild(child);
            newNode.addChild(child);
        });
        existingNode.addChild(newNode);
    }
    static swapNodeWithChild(node) {
        assert(node.getChildCount() === 1);
        const child = node.getChildAt(0);
        assert(child.getChildCount() === 1);
        TreeHelper.removeNode(node);
        TreeHelper.insertNodeAt(child, node);
        return child;
    }
    static pushNodeBelowChild(node, shouldPushDownFn, cloneFn) {
        assert(node.getChildCount() === 1);
        const child = node.getChildAt(0);
        assert(child.getChildCount() > 1);
        const grandChildren = child.getChildren().slice();
        const canPushDown = grandChildren.some(grandChild => shouldPushDownFn(grandChild));
        if (!canPushDown) {
            return node;
        }
        TreeHelper.removeNode(node);
        grandChildren.forEach((grandChild, index) => {
            if (shouldPushDownFn(grandChild)) {
                const newNode = cloneFn(node);
                child.removeChildAt(index);
                newNode.addChild(grandChild);
                child.addChildAt(newNode, index);
            }
        });
        return child;
    }
    static replaceChainWithChain(oldHead, oldTail, newHead, newTail) {
        const parentNode = oldHead.getParent();
        if (parentNode !== null) {
            const oldHeadIndex = parentNode.getChildren().indexOf(oldHead);
            parentNode.removeChildAt(oldHeadIndex);
            parentNode.addChildAt(newHead, oldHeadIndex);
        }
        oldTail
            .getChildren()
            .slice()
            .forEach(child => {
            oldTail.removeChild(child);
            newTail.addChild(child);
        });
        return newHead;
    }
    static replaceNodeWithChain(node, head, tail) {
        return TreeHelper.replaceChainWithChain(node, node, head, tail);
    }
    static replaceChainWithNode(head, tail, node) {
        return TreeHelper.replaceChainWithChain(head, tail, node, node);
    }
    static find(root, filterFn, stopFn) {
        const results = [];
        const filterRec = (node) => {
            if (filterFn(node)) {
                results.push(node);
            }
            if (stopFn === undefined || stopFn === null || !stopFn(node)) {
                node.getChildren().forEach(filterRec);
            }
        };
        filterRec(root);
        return results;
    }
    static toString(rootNode, stringFunc) {
        const defaultStringFn = (node) => {
            return node.toString() + '\n';
        };
        const stringFn = stringFunc || defaultStringFn;
        let out = '';
        rootNode.traverse(node => {
            for (let i = 0; i < node.getDepth(); i++) {
                out += '-';
            }
            out += stringFn(node);
        });
        return out;
    }
}
class CombinedPredicate extends PredicateNode {
    constructor(operator) {
        super();
        this.operator = operator;
        this.isComplement = false;
    }
    eval(relation) {
        const results = this.getChildren().map(condition => condition.eval(relation));
        return this.combineResults(results);
    }
    setComplement(isComplement) {
        if (this.isComplement === isComplement) {
            return;
        }
        this.isComplement = isComplement;
        this.operator = this.operator === Operator.AND ? Operator.OR : Operator.AND;
        this.getChildren().forEach(condition => condition.setComplement(isComplement));
    }
    copy() {
        const copy = TreeHelper.map(this, node => {
            if (node instanceof CombinedPredicate) {
                const tempCopy = new CombinedPredicate(node.operator);
                tempCopy.isComplement = node.isComplement;
                tempCopy.setId(node.getId());
                return tempCopy;
            }
            else {
                return node.copy();
            }
        });
        return copy;
    }
    getColumns(results) {
        const columns = results || [];
        this.traverse(child => {
            if (child === this) {
                return;
            }
            child.getColumns(columns);
        });
        const columnSet = new Set(columns);
        return Array.from(columnSet.values());
    }
    getTables(results) {
        const tables = results ? results : new Set();
        this.traverse(child => {
            if (child === this) {
                return;
            }
            child.getTables(tables);
        });
        return tables;
    }
    toString() {
        return `combined_pred_${this.operator.toString()}`;
    }
    toKeyRange() {
        assert(this.isKeyRangeCompatible(), 'Could not convert combined predicate to key range.');
        if (this.operator === Operator.OR) {
            const keyRangeSet = new SingleKeyRangeSet();
            this.getChildren().forEach(child => {
                const childKeyRanges = child
                    .toKeyRange()
                    .getValues();
                keyRangeSet.add(childKeyRanges);
            });
            return keyRangeSet;
        }
        else {
            assert(false, 'toKeyRange() called for an AND predicate.');
            return new SingleKeyRangeSet();
        }
    }
    isKeyRangeCompatible() {
        if (this.operator === Operator.OR) {
            return this.isKeyRangeCompatibleOr();
        }
        return false;
    }
    combineResults(results) {
        if (this.operator === Operator.AND) {
            return Relation.intersect(results);
        }
        else {
            return Relation.union(results);
        }
    }
    isKeyRangeCompatibleOr() {
        let predicateColumn = null;
        return this.getChildren().every(child => {
            const isCandidate = child instanceof ValuePredicate && child.isKeyRangeCompatible();
            if (!isCandidate) {
                return false;
            }
            if (predicateColumn === null) {
                predicateColumn = child.column;
            }
            return (predicateColumn.getNormalizedName() ===
                child.column.getNormalizedName());
        });
    }
}
export class op {
    static and(...predicates) {
        return op.createPredicate(Operator.AND, predicates);
    }
    static or(...predicates) {
        return op.createPredicate(Operator.OR, predicates);
    }
    static not(operand) {
        operand.setComplement(true);
        return operand;
    }
    static createPredicate(operator, predicates) {
        const condition = new CombinedPredicate(operator);
        predicates.forEach(predicate => condition.addChild(predicate));
        return condition;
    }
}
class MapSet {
    constructor() {
        this.map = new Map();
        this.count = 0;
    }
    get size() {
        return this.count;
    }
    has(key) {
        return this.map.has(key);
    }
    set(key, value) {
        const valueSet = this.getSet(key);
        if (!valueSet.has(value)) {
            valueSet.add(value);
            this.count++;
        }
        return this;
    }
    setMany(key, values) {
        const valueSet = this.getSet(key);
        values.forEach(value => {
            if (!valueSet.has(value)) {
                valueSet.add(value);
                this.count++;
            }
        });
        return this;
    }
    merge(mapSet) {
        mapSet
            .keys()
            .forEach(key => this.setMany(key, Array.from(mapSet.getSet(key))));
        return this;
    }
    delete(key, value) {
        const valueSet = this.map.get(key) || null;
        if (valueSet === null) {
            return false;
        }
        const didRemove = valueSet.delete(value);
        if (didRemove) {
            this.count--;
            if (valueSet.size === 0) {
                this.map.delete(key);
            }
        }
        return didRemove;
    }
    get(key) {
        const valueSet = this.map.get(key) || null;
        return valueSet === null ? null : Array.from(valueSet);
    }
    clear() {
        this.map.clear();
        this.count = 0;
    }
    keys() {
        return Array.from(this.map.keys());
    }
    values() {
        const results = [];
        this.map.forEach(valueSet => results.push(...Array.from(valueSet)));
        return results;
    }
    getSet(key) {
        let valueSet = this.map.get(key) || null;
        if (valueSet === null) {
            valueSet = new Set();
            this.map.set(key, valueSet);
        }
        return valueSet;
    }
}
class JoinPredicate extends PredicateNode {
    constructor(leftColumn, rightColumn, evaluatorType) {
        super();
        this.leftColumn = leftColumn;
        this.rightColumn = rightColumn;
        this.evaluatorType = evaluatorType;
        this.nullPayload = null;
        const registry = EvalRegistry.get();
        this.evaluatorFn = registry.getEvaluator(this.leftColumn.getType(), this.evaluatorType);
        this.keyOfIndexFn = registry.getKeyOfIndexEvaluator(this.leftColumn.getType());
    }
    copy() {
        const clone = new JoinPredicate(this.leftColumn, this.rightColumn, this.evaluatorType);
        clone.setId(this.getId());
        return clone;
    }
    getColumns(results) {
        if (results !== undefined && results !== null) {
            results.push(this.leftColumn);
            results.push(this.rightColumn);
            return results;
        }
        return [this.leftColumn, this.rightColumn];
    }
    getTables(results) {
        const tables = results !== undefined && results !== null
            ? results
            : new Set();
        tables.add(this.leftColumn.getTable());
        tables.add(this.rightColumn.getTable());
        return tables;
    }
    reverse() {
        let evaluatorType = this.evaluatorType;
        switch (this.evaluatorType) {
            case EvalType.GT:
                evaluatorType = EvalType.LT;
                break;
            case EvalType.LT:
                evaluatorType = EvalType.GT;
                break;
            case EvalType.GTE:
                evaluatorType = EvalType.LTE;
                break;
            case EvalType.LTE:
                evaluatorType = EvalType.GTE;
                break;
            default:
                break;
        }
        const newPredicate = new JoinPredicate(this.rightColumn, this.leftColumn, evaluatorType);
        return newPredicate;
    }
    eval(relation) {
        const entries = relation.entries.filter(entry => {
            const leftValue = entry.getField(this.leftColumn);
            const rightValue = entry.getField(this.rightColumn);
            return this.evaluatorFn(leftValue, rightValue);
        }, this);
        return new Relation(entries, relation.getTables());
    }
    toString() {
        return ('join_pred(' +
            this.leftColumn.getNormalizedName() +
            ' ' +
            this.evaluatorType +
            ' ' +
            this.rightColumn.getNormalizedName() +
            ')');
    }
    evalRelationsNestedLoopJoin(leftRelation, rightRelation, isOuterJoin) {
        let leftRightRelations = [leftRelation, rightRelation];
        if (!isOuterJoin) {
            leftRightRelations = this.detectLeftRight(leftRelation, rightRelation);
        }
        leftRelation = leftRightRelations[0];
        rightRelation = leftRightRelations[1];
        const combinedEntries = [];
        const leftRelationTables = leftRelation.getTables();
        const rightRelationTables = rightRelation.getTables();
        const leftEntriesLength = leftRelation.entries.length;
        const rightEntriesLength = rightRelation.entries.length;
        const blockNumBits = JoinPredicate.BLOCK_SIZE_EXPONENT;
        const blockCount = (rightEntriesLength + (1 << blockNumBits) - 1) >> blockNumBits;
        let currentBlock = 0;
        while (currentBlock < blockCount) {
            for (let i = 0; i < leftEntriesLength; i++) {
                let matchFound = false;
                const leftValue = leftRelation.entries[i].getField(this.leftColumn);
                if (leftValue !== null) {
                    const rightLimit = Math.min((currentBlock + 1) << blockNumBits, rightEntriesLength);
                    for (let j = currentBlock << blockNumBits; j < rightLimit; j++) {
                        const predicateResult = this.evaluatorFn(leftValue, rightRelation.entries[j].getField(this.rightColumn));
                        if (predicateResult) {
                            matchFound = true;
                            const combinedEntry = RelationEntry.combineEntries(leftRelation.entries[i], leftRelationTables, rightRelation.entries[j], rightRelationTables);
                            combinedEntries.push(combinedEntry);
                        }
                    }
                }
                if (isOuterJoin && !matchFound) {
                    combinedEntries.push(this.createCombinedEntryForUnmatched(leftRelation.entries[i], leftRelationTables));
                }
            }
            currentBlock++;
        }
        const srcTables = leftRelation
            .getTables()
            .concat(rightRelation.getTables());
        return new Relation(combinedEntries, srcTables);
    }
    evalRelationsHashJoin(leftRelation, rightRelation, isOuterJoin) {
        let leftRightRelations = [leftRelation, rightRelation];
        if (!isOuterJoin) {
            leftRightRelations = this.detectLeftRight(leftRelation, rightRelation);
        }
        leftRelation = leftRightRelations[0];
        rightRelation = leftRightRelations[1];
        let minRelation = leftRelation;
        let maxRelation = rightRelation;
        let minColumn = this.leftColumn;
        let maxColumn = this.rightColumn;
        if (isOuterJoin) {
            minRelation = rightRelation;
            maxRelation = leftRelation;
            minColumn = this.rightColumn;
            maxColumn = this.leftColumn;
        }
        const map = new MapSet();
        const combinedEntries = [];
        minRelation.entries.forEach(entry => {
            const key = String(entry.getField(minColumn));
            map.set(key, entry);
        });
        const minRelationTableNames = minRelation.getTables();
        const maxRelationTableNames = maxRelation.getTables();
        maxRelation.entries.forEach(entry => {
            const value = entry.getField(maxColumn);
            const key = String(value);
            if (value !== null && map.has(key)) {
                map.get(key).forEach(innerEntry => {
                    const combinedEntry = RelationEntry.combineEntries(entry, maxRelationTableNames, innerEntry, minRelationTableNames);
                    combinedEntries.push(combinedEntry);
                });
            }
            else {
                if (isOuterJoin) {
                    combinedEntries.push(this.createCombinedEntryForUnmatched(entry, maxRelationTableNames));
                }
            }
        }, this);
        const srcTables = leftRelation
            .getTables()
            .concat(rightRelation.getTables());
        return new Relation(combinedEntries, srcTables);
    }
    evalRelationsIndexNestedLoopJoin(leftRelation, rightRelation, indexJoinInfo, cache) {
        assert(this.evaluatorType === EvalType.EQ, 'For now, index nested loop join can only be leveraged for EQ.');
        const indexedTable = indexJoinInfo.indexedColumn.getTable();
        let outerRelation = leftRelation;
        let innerRelation = rightRelation;
        if (leftRelation.getTables().indexOf(indexedTable.getEffectiveName()) !== -1) {
            outerRelation = rightRelation;
            innerRelation = leftRelation;
        }
        const combinedEntries = [];
        const innerRelationTables = innerRelation.getTables();
        const outerRelationTables = outerRelation.getTables();
        function pushCombinedEntry(outerEntry, row) {
            const innerEntry = new RelationEntry(row, innerRelationTables.length > 1);
            const combinedEntry = RelationEntry.combineEntries(outerEntry, outerRelationTables, innerEntry, innerRelationTables);
            combinedEntries.push(combinedEntry);
        }
        outerRelation.entries.forEach(entry => {
            const keyOfIndex = this.keyOfIndexFn(entry.getField(indexJoinInfo.nonIndexedColumn));
            const matchingRowIds = indexJoinInfo.index.get(keyOfIndex);
            if (matchingRowIds.length === 0) {
                return;
            }
            if (indexJoinInfo.index.isUniqueKey()) {
                pushCombinedEntry(entry, cache.get(matchingRowIds[0]));
            }
            else {
                const rows = cache.getMany(matchingRowIds);
                rows.forEach(r => pushCombinedEntry(entry, r));
            }
        }, this);
        const srcTables = outerRelation
            .getTables()
            .concat(innerRelation.getTables());
        return new Relation(combinedEntries, srcTables);
    }
    setComplement(isComplement) {
        throw new Exception(ErrorCode.ASSERTION, 'Join predicate has no complement');
    }
    reverseSelf() {
        const temp = this.leftColumn;
        this.leftColumn = this.rightColumn;
        this.rightColumn = temp;
        let evaluatorType = this.evaluatorType;
        switch (this.evaluatorType) {
            case EvalType.GT:
                evaluatorType = EvalType.LT;
                break;
            case EvalType.LT:
                evaluatorType = EvalType.GT;
                break;
            case EvalType.GTE:
                evaluatorType = EvalType.LTE;
                break;
            case EvalType.LTE:
                evaluatorType = EvalType.GTE;
                break;
            default:
                return;
        }
        this.evaluatorType = evaluatorType;
        this.evaluatorFn = EvalRegistry.get().getEvaluator(this.leftColumn.getType(), this.evaluatorType);
    }
    appliesToLeft(relation) {
        return (relation
            .getTables()
            .indexOf(this.leftColumn.getTable().getEffectiveName()) !== -1);
    }
    appliesToRight(relation) {
        return (relation
            .getTables()
            .indexOf(this.rightColumn.getTable().getEffectiveName()) !== -1);
    }
    assertRelationsApply(left, right) {
        assert(this.appliesToLeft(left), 'Mismatch between join predicate left operand and right relation.');
        assert(this.appliesToRight(right), 'Mismatch between join predicate right operand and right relation.');
    }
    detectLeftRight(relation1, relation2) {
        let left = null;
        let right = null;
        if (this.appliesToLeft(relation1)) {
            this.assertRelationsApply(relation1, relation2);
            left = relation1;
            right = relation2;
        }
        else {
            this.assertRelationsApply(relation2, relation1);
            left = relation2;
            right = relation1;
        }
        if (left.entries.length > right.entries.length) {
            this.reverseSelf();
            this.assertRelationsApply(right, left);
            return [right, left];
        }
        return [left, right];
    }
    createNullPayload(table) {
        const payload = {};
        table.getColumns().forEach(column => (payload[column.getName()] = null));
        return payload;
    }
    createCombinedEntryForUnmatched(entry, leftRelationTables) {
        if (this.nullPayload === null) {
            this.nullPayload = this.createNullPayload(this.rightColumn.getTable());
        }
        const nullEntry = new RelationEntry(new Row(Row.DUMMY_ID, this.nullPayload), false);
        const combinedEntry = RelationEntry.combineEntries(entry, leftRelationTables, nullEntry, [this.rightColumn.getTable().getEffectiveName()]);
        return combinedEntry;
    }
}
JoinPredicate.BLOCK_SIZE_EXPONENT = 8;
class SelectContext extends Context {
    static orderByToString(orderBy) {
        let out = '';
        orderBy.forEach((orderByEl, index) => {
            out += orderByEl.column.getNormalizedName() + ' ';
            out += orderByEl.order === Order.ASC ? 'ASC' : 'DESC';
            if (index < orderBy.length - 1) {
                out += ', ';
            }
        });
        return out;
    }
    constructor(dbSchema) {
        super(dbSchema);
    }
    getScope() {
        return new Set(this.from);
    }
    clone() {
        const context = new SelectContext(this.schema);
        context.cloneBase(this);
        if (this.columns) {
            context.columns = this.columns.slice();
        }
        if (this.from) {
            context.from = this.from.slice();
        }
        context.limit = this.limit;
        context.skip = this.skip;
        if (this.orderBy) {
            context.orderBy = this.orderBy.slice();
        }
        if (this.groupBy) {
            context.groupBy = this.groupBy.slice();
        }
        if (this.limitBinder) {
            context.limitBinder = this.limitBinder;
        }
        if (this.skipBinder) {
            context.skipBinder = this.skipBinder;
        }
        context.outerJoinPredicates = this.outerJoinPredicates;
        return context;
    }
    bind(values) {
        super.bind(values);
        if (this.limitBinder !== undefined && this.limitBinder !== null) {
            this.limit = values[this.limitBinder.index];
        }
        if (this.skipBinder !== undefined && this.skipBinder !== null) {
            this.skip = values[this.skipBinder.index];
        }
        this.bindValuesInSearchCondition(values);
        return this;
    }
}
class TransactionStatsImpl {
    static getDefault() {
        return new TransactionStatsImpl(false, 0, 0, 0, 0);
    }
    constructor(success_, insertedRowCount_, updatedRowCount_, deletedRowCount_, changedTableCount_) {
        this.success_ = success_;
        this.insertedRowCount_ = insertedRowCount_;
        this.updatedRowCount_ = updatedRowCount_;
        this.deletedRowCount_ = deletedRowCount_;
        this.changedTableCount_ = changedTableCount_;
    }
    success() {
        return this.success_;
    }
    insertedRowCount() {
        return this.insertedRowCount_;
    }
    updatedRowCount() {
        return this.updatedRowCount_;
    }
    deletedRowCount() {
        return this.deletedRowCount_;
    }
    changedTableCount() {
        return this.changedTableCount_;
    }
}
class QueryTask extends UniqueId {
    constructor(global, items) {
        super();
        this.global = global;
        this.backStore = global.getService(Service.BACK_STORE);
        this.queries = items.map(item => item.context);
        this.plans = items.map(item => item.plan);
        this.combinedScope = PhysicalQueryPlan.getCombinedScope(this.plans);
        this.txType = this.detectType();
        this.resolver = new Resolver();
    }
    exec() {
        const journal = this.txType === TransactionType.READ_ONLY
            ? undefined
            : new Journal(this.global, this.combinedScope);
        const results = [];
        const remainingPlans = this.plans.slice();
        const queries = this.queries;
        const sequentiallyExec = () => {
            const plan = remainingPlans.shift();
            if (plan) {
                const queryContext = queries[results.length];
                return plan
                    .getRoot()
                    .exec(journal, queryContext)
                    .then(relations => {
                    results.push(relations[0]);
                    return sequentiallyExec();
                });
            }
            return Promise.resolve(results);
        };
        return sequentiallyExec()
            .then(() => {
            this.tx = this.backStore.createTx(this.txType, Array.from(this.combinedScope.values()), journal);
            return this.tx.commit();
        })
            .then(() => {
            this.onSuccess(results);
            return results;
        }, e => {
            if (journal) {
                journal.rollback();
            }
            throw e;
        });
    }
    getType() {
        return this.txType;
    }
    getScope() {
        return this.combinedScope;
    }
    getResolver() {
        return this.resolver;
    }
    getId() {
        return this.getUniqueNumber();
    }
    stats() {
        let results = null;
        if (this.tx) {
            results = this.tx.stats();
        }
        return results === null ? TransactionStatsImpl.getDefault() : results;
    }
    onSuccess(results) {
    }
    detectType() {
        return this.queries.some(query => !(query instanceof SelectContext))
            ? TransactionType.READ_WRITE
            : TransactionType.READ_ONLY;
    }
}
class ObserverQueryTask extends QueryTask {
    constructor(global, items) {
        super(global, items);
        this.observerRegistry = global.getService(Service.OBSERVER_REGISTRY);
    }
    getPriority() {
        return TaskPriority.OBSERVER_QUERY_TASK;
    }
    onSuccess(results) {
        this.queries.forEach((query, index) => {
            this.observerRegistry.updateResultsForQuery(query, results[index]);
        });
    }
}
class UserQueryTask extends QueryTask {
    constructor(global, items) {
        super(global, items);
        this.runner = global.getService(Service.RUNNER);
        this.observerRegistry = global.getService(Service.OBSERVER_REGISTRY);
    }
    getPriority() {
        return TaskPriority.USER_QUERY_TASK;
    }
    onSuccess(results) {
        this.getType() === TransactionType.READ_ONLY
            ? this.notifyObserversDirectly(results)
            : this.scheduleObserverTask();
    }
    notifyObserversDirectly(results) {
        this.queries.forEach((query, index) => {
            this.observerRegistry.updateResultsForQuery(query, results[index]);
        });
    }
    scheduleObserverTask() {
        const items = this.observerRegistry.getTaskItemsForTables(Array.from(this.getScope().values()));
        if (items.length > 0) {
            this.runner.scheduleTask(new ObserverQueryTask(this.global, items));
        }
    }
}
class DatabaseSchemaImpl {
    constructor(_name, _version) {
        this._name = _name;
        this._version = _version;
        this.tableMap = new Map();
        this._pragma = { enableBundledMode: false };
        this._info = undefined;
    }
    name() {
        return this._name;
    }
    version() {
        return this._version;
    }
    info() {
        if (this._info === undefined) {
            this._info = new Info(this);
        }
        return this._info;
    }
    tables() {
        return Array.from(this.tableMap.values());
    }
    table(tableName) {
        const ret = this.tableMap.get(tableName);
        if (!ret) {
            throw new Exception(ErrorCode.TABLE_NOT_FOUND, tableName);
        }
        return ret;
    }
    setTable(table) {
        this.tableMap.set(table.getName(), table);
    }
    pragma() {
        return this._pragma;
    }
}
class Info {
    static from(dbSchema) {
        return dbSchema.info();
    }
    constructor(dbSchema) {
        this.dbSchema = dbSchema;
        this.cascadeReferringFk = new MapSet();
        this.restrictReferringFk = new MapSet();
        this.parents = new MapSet();
        this.colParent = new Map();
        this.children = new MapSet();
        this.cascadeChildren = new MapSet();
        this.restrictChildren = new MapSet();
        this.colChild = new MapSet();
        this.dbSchema.tables().forEach(t => {
            const table = t;
            const tableName = table.getName();
            table
                .getConstraint()
                .getForeignKeys()
                .forEach(fkSpec => {
                this.parents.set(tableName, this.dbSchema.table(fkSpec.parentTable));
                this.children.set(fkSpec.parentTable, table);
                if (fkSpec.action === ConstraintAction.RESTRICT) {
                    this.restrictReferringFk.set(fkSpec.parentTable, fkSpec);
                    this.restrictChildren.set(fkSpec.parentTable, table);
                }
                else {
                    this.cascadeReferringFk.set(fkSpec.parentTable, fkSpec);
                    this.cascadeChildren.set(fkSpec.parentTable, table);
                }
                this.colParent.set(table.getName() + '.' + fkSpec.childColumn, fkSpec.parentTable);
                const ref = `${fkSpec.parentTable}.${fkSpec.parentColumn}`;
                this.colChild.set(ref, table.getName());
            }, this);
        }, this);
    }
    getReferencingForeignKeys(tableName, constraintAction) {
        if (constraintAction !== undefined && constraintAction !== null) {
            return constraintAction === ConstraintAction.CASCADE
                ? this.cascadeReferringFk.get(tableName)
                : this.restrictReferringFk.get(tableName);
        }
        else {
            const cascadeConstraints = this.cascadeReferringFk.get(tableName);
            const restrictConstraints = this.restrictReferringFk.get(tableName);
            if (cascadeConstraints === null && restrictConstraints === null) {
                return null;
            }
            else {
                return (cascadeConstraints || []).concat(restrictConstraints || []);
            }
        }
    }
    getParentTables(tableName) {
        return this.expandScope(tableName, this.parents);
    }
    getParentTablesByColumns(colNames) {
        const tableNames = new Set();
        colNames.forEach(col => {
            const table = this.colParent.get(col);
            if (table) {
                tableNames.add(table);
            }
        }, this);
        const tables = Array.from(tableNames.values());
        return tables.map(tableName => this.dbSchema.table(tableName));
    }
    getChildTables(tableName, constraintAction) {
        if (!(constraintAction !== undefined && constraintAction !== null)) {
            return this.expandScope(tableName, this.children);
        }
        else if (constraintAction === ConstraintAction.RESTRICT) {
            return this.expandScope(tableName, this.restrictChildren);
        }
        else {
            return this.expandScope(tableName, this.cascadeChildren);
        }
    }
    getChildTablesByColumns(colNames) {
        const tableNames = new Set();
        colNames.forEach(col => {
            const children = this.colChild.get(col);
            if (children) {
                children.forEach(child => tableNames.add(child));
            }
        }, this);
        const tables = Array.from(tableNames.values());
        return tables.map(tableName => this.dbSchema.table(tableName));
    }
    expandScope(tableName, map) {
        const values = map.get(tableName);
        return values === null ? [] : values;
    }
}
class DeleteContext extends Context {
    constructor(dbSchema) {
        super(dbSchema);
    }
    getScope() {
        const scope = new Set();
        scope.add(this.from);
        this.expandTableScope(this.from.getName(), scope);
        return scope;
    }
    clone() {
        const context = new DeleteContext(this.schema);
        context.cloneBase(this);
        context.from = this.from;
        return context;
    }
    bind(values) {
        super.bind(values);
        this.bindValuesInSearchCondition(values);
        return this;
    }
    expandTableScope(tableName, scopeSoFar) {
        const cascadeChildTables = Info.from(this.schema).getChildTables(tableName, ConstraintAction.CASCADE);
        const childTables = Info.from(this.schema).getChildTables(tableName);
        childTables.forEach(scopeSoFar.add.bind(scopeSoFar));
        cascadeChildTables.forEach(childTable => {
            this.expandTableScope(childTable.getName(), scopeSoFar);
        }, this);
    }
}
class InsertContext extends Context {
    constructor(dbSchema) {
        super(dbSchema);
    }
    getScope() {
        const scope = new Set();
        scope.add(this.into);
        const info = Info.from(this.schema);
        info.getParentTables(this.into.getName()).forEach(scope.add.bind(scope));
        if (this.allowReplace) {
            info.getChildTables(this.into.getName()).forEach(scope.add.bind(scope));
        }
        return scope;
    }
    clone() {
        const context = new InsertContext(this.schema);
        context.cloneBase(this);
        context.into = this.into;
        if (this.values) {
            context.values =
                this.values instanceof Binder ? this.values : this.values.slice();
        }
        context.allowReplace = this.allowReplace;
        context.binder = this.binder;
        return context;
    }
    bind(values) {
        super.bind(values);
        if (this.binder) {
            if (this.binder instanceof Binder) {
                this.values = values[this.binder.index];
            }
            else {
                this.values = this.binder.map(val => {
                    return (val instanceof Binder ? values[val.index] : val);
                });
            }
        }
        return this;
    }
}
class UpdateContext extends Context {
    constructor(dbSchema) {
        super(dbSchema);
    }
    getScope() {
        const scope = new Set();
        scope.add(this.table);
        const columns = this.set.map(col => col.column.getNormalizedName());
        const info = Info.from(this.schema);
        info.getParentTablesByColumns(columns).forEach(scope.add.bind(scope));
        info.getChildTablesByColumns(columns).forEach(scope.add.bind(scope));
        return scope;
    }
    clone() {
        const context = new UpdateContext(this.schema);
        context.cloneBase(this);
        context.table = this.table;
        context.set = this.set ? this.cloneSet(this.set) : this.set;
        return context;
    }
    bind(values) {
        super.bind(values);
        this.set.forEach(set => {
            if (set.binding !== undefined && set.binding !== -1) {
                set.value = values[set.binding];
            }
        });
        this.bindValuesInSearchCondition(values);
        return this;
    }
    cloneSet(set) {
        return set.map(src => {
            const clone = Object.assign({}, src);
            return clone;
        });
    }
}
class SqlHelper {
    static toSql(builder, stripValueInfo = false) {
        const query = builder.getQuery();
        if (query instanceof InsertContext) {
            return SqlHelper.insertToSql(query, stripValueInfo);
        }
        if (query instanceof DeleteContext) {
            return SqlHelper.deleteToSql(query, stripValueInfo);
        }
        if (query instanceof UpdateContext) {
            return SqlHelper.updateToSql(query, stripValueInfo);
        }
        if (query instanceof SelectContext) {
            return SqlHelper.selectToSql(query, stripValueInfo);
        }
        throw new Exception(ErrorCode.NOT_IMPL_IN_TOSQL, typeof query);
    }
    static escapeSqlValue(type, val) {
        const value = val;
        if (value === undefined || value === null) {
            return 'NULL';
        }
        switch (type) {
            case Type.BOOLEAN:
                return value ? 1 : 0;
            case Type.INTEGER:
            case Type.NUMBER:
                return value;
            case Type.ARRAY_BUFFER:
                return `'${Row.binToHex(value)}'`;
            default:
                return `'${value.toString()}'`;
        }
    }
    static insertToSql(query, stripValueInfo) {
        let prefix = query.allowReplace ? 'INSERT OR REPLACE' : 'INSERT';
        const columns = query.into.getColumns();
        prefix += ' INTO ' + query.into.getName() + '(';
        prefix += columns.map(col => col.getName()).join(', ');
        prefix += ') VALUES (';
        const sqls = query.values.map(row => {
            const values = columns.map(col => {
                const rawVal = row.payload()[col.getName()];
                return stripValueInfo
                    ? rawVal !== undefined && rawVal !== null
                        ? '#'
                        : 'NULL'
                    : SqlHelper.escapeSqlValue(col.getType(), rawVal);
            });
            return prefix + values.join(', ') + ');';
        });
        return sqls.join('\n');
    }
    static evaluatorToSql(op) {
        switch (op) {
            case EvalType.BETWEEN:
                return 'BETWEEN';
            case EvalType.EQ:
                return '=';
            case EvalType.GTE:
                return '>=';
            case EvalType.GT:
                return '>';
            case EvalType.IN:
                return 'IN';
            case EvalType.LTE:
                return '<=';
            case EvalType.LT:
                return '<';
            case EvalType.MATCH:
                return 'LIKE';
            case EvalType.NEQ:
                return '<>';
            default:
                return 'UNKNOWN';
        }
    }
    static valueToSql(value, op, type, stripValueInfo) {
        if (value instanceof Binder) {
            return '?' + value.getIndex().toString();
        }
        if (stripValueInfo) {
            return value !== undefined && value !== null ? '#' : 'NULL';
        }
        else if (op === EvalType.MATCH) {
            return `'${value.toString()}'`;
        }
        else if (op === EvalType.IN) {
            const array = value;
            const vals = array.map(e => SqlHelper.escapeSqlValue(type, e));
            return `(${vals.join(', ')})`;
        }
        else if (op === EvalType.BETWEEN) {
            return (SqlHelper.escapeSqlValue(type, value[0]) +
                ' AND ' +
                SqlHelper.escapeSqlValue(type, value[1]));
        }
        return SqlHelper.escapeSqlValue(type, value).toString();
    }
    static valuePredicateToSql(pred, stripValueInfo) {
        const column = pred.column.getNormalizedName();
        const op = SqlHelper.evaluatorToSql(pred.evaluatorType);
        const value = SqlHelper.valueToSql(pred.peek(), pred.evaluatorType, pred.column.getType(), stripValueInfo);
        if (op === '=' && value === 'NULL') {
            return [column, 'IS NULL'].join(' ');
        }
        else if (op === '<>' && value === 'NULL') {
            return [column, 'IS NOT NULL'].join(' ');
        }
        else {
            return [column, op, value].join(' ');
        }
    }
    static combinedPredicateToSql(pred, stripValueInfo) {
        const children = pred.getChildren().map(childNode => {
            return ('(' +
                SqlHelper.parseSearchCondition(childNode, stripValueInfo) +
                ')');
        });
        const joinToken = pred.operator === Operator.AND ? ' AND ' : ' OR ';
        return children.join(joinToken);
    }
    static joinPredicateToSql(pred) {
        return [
            pred.leftColumn.getNormalizedName(),
            SqlHelper.evaluatorToSql(pred.evaluatorType),
            pred.rightColumn.getNormalizedName(),
        ].join(' ');
    }
    static parseSearchCondition(pred, stripValueInfo) {
        if (pred instanceof ValuePredicate) {
            return SqlHelper.valuePredicateToSql(pred, stripValueInfo);
        }
        else if (pred instanceof CombinedPredicate) {
            return SqlHelper.combinedPredicateToSql(pred, stripValueInfo);
        }
        else if (pred instanceof JoinPredicate) {
            return SqlHelper.joinPredicateToSql(pred);
        }
        throw new Exception(357, typeof pred);
    }
    static predicateToSql(pred, stripValueInfo) {
        const whereClause = SqlHelper.parseSearchCondition(pred, stripValueInfo);
        if (whereClause) {
            return ' WHERE ' + whereClause;
        }
        return '';
    }
    static deleteToSql(query, stripValueInfo) {
        let sql = 'DELETE FROM ' + query.from.getName();
        if (query.where) {
            sql += SqlHelper.predicateToSql(query.where, stripValueInfo);
        }
        sql += ';';
        return sql;
    }
    static updateToSql(query, stripValueInfo) {
        let sql = 'UPDATE ' + query.table.getName() + ' SET ';
        sql += query.set
            .map(set => {
            const c = set.column;
            const setter = c.getNormalizedName() + ' = ';
            if (set.binding !== -1) {
                return setter + '?' + set.binding.toString();
            }
            return (setter + SqlHelper.escapeSqlValue(c.getType(), set.value).toString());
        })
            .join(', ');
        if (query.where) {
            sql += SqlHelper.predicateToSql(query.where, stripValueInfo);
        }
        sql += ';';
        return sql;
    }
    static selectToSql(query, stripValueInfo) {
        let colList = '*';
        if (query.columns.length) {
            colList = query.columns
                .map(c => {
                const col = c;
                if (col.getAlias()) {
                    return col.getNormalizedName() + ' AS ' + col.getAlias();
                }
                else {
                    return col.getNormalizedName();
                }
            })
                .join(', ');
        }
        let sql = 'SELECT ' + colList + ' FROM ';
        if (query.outerJoinPredicates && query.outerJoinPredicates.size !== 0) {
            sql += SqlHelper.getFromListForOuterJoin(query, stripValueInfo);
        }
        else {
            sql += SqlHelper.getFromListForInnerJoin(query, stripValueInfo);
            if (query.where) {
                sql += SqlHelper.predicateToSql(query.where, stripValueInfo);
            }
        }
        if (query.orderBy) {
            const orderBy = query.orderBy
                .map(order => {
                return (order.column.getNormalizedName() +
                    (order.order === Order.DESC ? ' DESC' : ' ASC'));
            })
                .join(', ');
            sql += ' ORDER BY ' + orderBy;
        }
        if (query.groupBy) {
            const groupBy = query.groupBy
                .map(col => col.getNormalizedName())
                .join(', ');
            sql += ' GROUP BY ' + groupBy;
        }
        if (query.limit) {
            sql += ' LIMIT ' + query.limit.toString();
        }
        if (query.skip) {
            sql += ' SKIP ' + query.skip.toString();
        }
        sql += ';';
        return sql;
    }
    static getTableNameToSql(t) {
        const table = t;
        return table.getEffectiveName() !== table.getName()
            ? table.getName() + ' AS ' + table.getEffectiveName()
            : table.getName();
    }
    static getFromListForOuterJoin(query, stripValueInfo) {
        const retrievedNodes = TreeHelper.find(query.where, (n) => n instanceof JoinPredicate);
        const predicateString = retrievedNodes.map((n) => SqlHelper.joinPredicateToSql(n));
        let fromList = SqlHelper.getTableNameToSql(query.from[0]);
        for (let i = 1; i < query.from.length; i++) {
            const fromName = SqlHelper.getTableNameToSql(query.from[i]);
            if (query.outerJoinPredicates.has(retrievedNodes[predicateString.length - i].getId())) {
                fromList += ' LEFT OUTER JOIN ' + fromName;
            }
            else {
                fromList += ' INNER JOIN ' + fromName;
            }
            fromList += ' ON (' + predicateString[predicateString.length - i] + ')';
        }
        const node = query.where;
        const leftChild = node.getChildCount() > 0 ? node.getChildAt(0) : node;
        if (!(leftChild instanceof JoinPredicate)) {
            fromList +=
                ' WHERE ' +
                    SqlHelper.parseSearchCondition(leftChild, stripValueInfo);
        }
        return fromList;
    }
    static getFromListForInnerJoin(query, stripValueInfo) {
        return query.from.map(SqlHelper.getTableNameToSql).join(', ');
    }
}
class BaseBuilder {
    constructor(global, context) {
        this.global = global;
        this.queryEngine = global.getService(Service.QUERY_ENGINE);
        this.runner = global.getService(Service.RUNNER);
        this.query = context;
    }
    exec() {
        try {
            this.assertExecPreconditions();
        }
        catch (e) {
            return Promise.reject(e);
        }
        return new Promise((resolve, reject) => {
            const queryTask = new UserQueryTask(this.global, [this.getTaskItem()]);
            this.runner
                .scheduleTask(queryTask)
                .then(results => resolve(results[0].getPayloads()), reject);
        });
    }
    explain() {
        const stringFn = (node) => `${node.toContextString(this.query)}\n`;
        return TreeHelper.toString(this.getPlan().getRoot(), stringFn);
    }
    bind(values) {
        this.query.bind(values);
        return this;
    }
    toSql(stripValueInfo = false) {
        return SqlHelper.toSql(this, stripValueInfo);
    }
    assertExecPreconditions() {
    }
    getQuery() {
        return this.query.clone();
    }
    getObservableQuery() {
        return this.query;
    }
    getTaskItem() {
        return {
            context: this.getQuery(),
            plan: this.getPlan(),
        };
    }
    getObservableTaskItem() {
        return {
            context: this.getObservableQuery(),
            plan: this.getPlan(),
        };
    }
    getPlan() {
        if (this.plan === undefined || this.plan === null) {
            this.plan = this.queryEngine.getPlan(this.query);
        }
        return this.plan;
    }
}
class SelectBuilder extends BaseBuilder {
    constructor(global, columns) {
        super(global, new SelectContext(global.getService(Service.SCHEMA)));
        this.fromAlreadyCalled = false;
        this.whereAlreadyCalled = false;
        this.query.columns = columns;
        this.checkDistinctColumn();
        this.checkAggregations();
    }
    assertExecPreconditions() {
        super.assertExecPreconditions();
        const context = this.query;
        if (context.from === undefined || context.from === null) {
            throw new Exception(ErrorCode.INVALID_SELECT);
        }
        if ((context.limitBinder && context.limit === undefined) ||
            (context.skipBinder && context.skip === undefined)) {
            throw new Exception(ErrorCode.UNBOUND_LIMIT_SKIP);
        }
        this.checkProjectionList();
    }
    from(...tables) {
        if (this.fromAlreadyCalled) {
            throw new Exception(ErrorCode.DUPLICATE_FROM);
        }
        this.fromAlreadyCalled = true;
        if (this.query.from === undefined || this.query.from === null) {
            this.query.from = [];
        }
        this.query.from.push(...tables);
        return this;
    }
    where(predicate) {
        this.checkFrom(ErrorCode.FROM_AFTER_WHERE);
        if (this.whereAlreadyCalled) {
            throw new Exception(ErrorCode.DUPLICATE_WHERE);
        }
        this.whereAlreadyCalled = true;
        this.augmentWhereClause(predicate);
        return this;
    }
    innerJoin(table, predicate) {
        this.checkFrom(ErrorCode.MISSING_FROM_BEFORE_JOIN);
        if (this.whereAlreadyCalled) {
            throw new Exception(ErrorCode.INVALID_WHERE);
        }
        this.query.from.push(table);
        this.augmentWhereClause(predicate);
        return this;
    }
    leftOuterJoin(table, predicate) {
        this.checkFrom(ErrorCode.MISSING_FROM_BEFORE_JOIN);
        if (!(predicate instanceof JoinPredicate)) {
            throw new Exception(ErrorCode.INVALID_OUTER_JOIN);
        }
        if (this.whereAlreadyCalled) {
            throw new Exception(ErrorCode.INVALID_WHERE);
        }
        this.query.from.push(table);
        if (this.query.outerJoinPredicates === null ||
            this.query.outerJoinPredicates === undefined) {
            this.query.outerJoinPredicates = new Set();
        }
        let normalizedPredicate = predicate;
        if (table.getEffectiveName() !==
            predicate.rightColumn.getTable().getEffectiveName()) {
            normalizedPredicate = predicate.reverse();
        }
        this.query.outerJoinPredicates.add(normalizedPredicate.getId());
        this.augmentWhereClause(normalizedPredicate);
        return this;
    }
    limit(numberOfRows) {
        if (this.query.limit !== undefined || this.query.limitBinder) {
            throw new Exception(ErrorCode.DUPLICATE_LIMIT);
        }
        if (numberOfRows instanceof Binder) {
            this.query.limitBinder = numberOfRows;
        }
        else {
            if (numberOfRows < 0) {
                throw new Exception(ErrorCode.NEGATIVE_LIMIT_SKIP);
            }
            this.query.limit = numberOfRows;
        }
        return this;
    }
    skip(numberOfRows) {
        if (this.query.skip !== undefined || this.query.skipBinder) {
            throw new Exception(ErrorCode.DUPLICATE_SKIP);
        }
        if (numberOfRows instanceof Binder) {
            this.query.skipBinder = numberOfRows;
        }
        else {
            if (numberOfRows < 0) {
                throw new Exception(ErrorCode.NEGATIVE_LIMIT_SKIP);
            }
            this.query.skip = numberOfRows;
        }
        return this;
    }
    orderBy(column, order) {
        this.checkFrom(ErrorCode.FROM_AFTER_ORDER_GROUPBY);
        if (this.query.orderBy === undefined) {
            this.query.orderBy = [];
        }
        this.query.orderBy.push({
            column,
            order: order !== undefined && order !== null ? order : Order.ASC,
        });
        return this;
    }
    groupBy(...columns) {
        this.checkFrom(ErrorCode.FROM_AFTER_ORDER_GROUPBY);
        if (this.query.groupBy) {
            throw new Exception(ErrorCode.DUPLICATE_GROUPBY);
        }
        if (this.query.groupBy === undefined) {
            this.query.groupBy = [];
        }
        this.query.groupBy.push(...columns);
        return this;
    }
    clone() {
        const builder = new SelectBuilder(this.global, this.query.columns);
        builder.query = this.query.clone();
        builder.query.clonedFrom = null;
        return builder;
    }
    checkDistinctColumn() {
        const distinctColumns = this.query.columns.filter(column => column instanceof AggregatedColumn &&
            column.aggregatorType === FnType.DISTINCT);
        const isValidCombination = distinctColumns.length === 0 ||
            (distinctColumns.length === 1 && this.query.columns.length === 1);
        if (!isValidCombination) {
            throw new Exception(ErrorCode.INVALID_DISTINCT);
        }
    }
    checkProjectionList() {
        this.query.groupBy
            ? this.checkGroupByColumns()
            : this.checkProjectionListNotMixed();
    }
    checkGroupByColumns() {
        const isInvalid = this.query.groupBy.some(column => {
            const type = column.getType();
            return type === Type.OBJECT || type === Type.ARRAY_BUFFER;
        });
        if (isInvalid) {
            throw new Exception(ErrorCode.INVALID_GROUPBY);
        }
    }
    checkProjectionListNotMixed() {
        const aggregatedColumnsExist = this.query.columns.some(column => column instanceof AggregatedColumn);
        const nonAggregatedColumnsExist = this.query.columns.some(column => !(column instanceof AggregatedColumn)) || this.query.columns.length === 0;
        if (aggregatedColumnsExist && nonAggregatedColumnsExist) {
            throw new Exception(ErrorCode.INVALID_PROJECTION);
        }
    }
    checkAggregations() {
        this.query.columns.forEach(column => {
            const isValidAggregation = !(column instanceof AggregatedColumn) ||
                this.isAggregationValid(column.aggregatorType, column.getType());
            if (!isValidAggregation) {
                throw new Exception(ErrorCode.INVALID_AGGREGATION, column.getNormalizedName());
            }
        }, this);
    }
    checkFrom(code) {
        if (this.query.from === undefined || this.query.from === null) {
            throw new Exception(code);
        }
    }
    augmentWhereClause(predicate) {
        if (this.query.where) {
            const newPredicate = op.and(predicate, this.query.where);
            this.query.where = newPredicate;
        }
        else {
            this.query.where = predicate;
        }
    }
    isAggregationValid(aggregatorType, columnType) {
        switch (aggregatorType) {
            case FnType.COUNT:
            case FnType.DISTINCT:
                return true;
            case FnType.AVG:
            case FnType.GEOMEAN:
            case FnType.STDDEV:
            case FnType.SUM:
                return columnType === Type.NUMBER || columnType === Type.INTEGER;
            case FnType.MAX:
            case FnType.MIN:
                return (columnType === Type.NUMBER ||
                    columnType === Type.INTEGER ||
                    columnType === Type.STRING ||
                    columnType === Type.DATE_TIME);
            default:
        }
        return false;
    }
}
class MathHelper {
    static longestCommonSubsequence(array1, array2, comparator, collector) {
        const defaultComparator = (a, b) => a === b;
        const defaultCollector = (i1, i2) => array1[i1];
        const compare = comparator || defaultComparator;
        const collect = collector || defaultCollector;
        const length1 = array1.length;
        const length2 = array2.length;
        const arr = [];
        let i;
        let j;
        for (i = 0; i < length1 + 1; ++i) {
            arr[i] = [];
            arr[i][0] = 0;
        }
        for (j = 0; j < length2 + 1; ++j) {
            arr[0][j] = 0;
        }
        for (i = 1; i < length1 + 1; ++i) {
            for (j = 1; j < length2 + 1; ++j) {
                arr[i][j] = compare(array1[i - 1], array2[j - 1])
                    ? arr[i - 1][j - 1] + 1
                    : Math.max(arr[i - 1][j], arr[i][j - 1]);
            }
        }
        const result = [];
        i = length1;
        j = length2;
        while (i > 0 && j > 0) {
            if (compare(array1[i - 1], array2[j - 1])) {
                result.unshift(collect(i - 1, j - 1));
                i--;
                j--;
            }
            else {
                if (arr[i - 1][j] > arr[i][j - 1]) {
                    i--;
                }
                else {
                    j--;
                }
            }
        }
        return result;
    }
    static sum(...args) {
        return args.reduce((sum, value) => sum + value, 0);
    }
    static average(...args) {
        return MathHelper.sum.apply(null, args) / args.length;
    }
    static standardDeviation(...args) {
        if (!args || args.length < 2) {
            return 0;
        }
        const mean = MathHelper.average.apply(null, args);
        const sampleVariance = MathHelper.sum.apply(null, args.map(val => Math.pow(val - mean, 2))) /
            (args.length - 1);
        return Math.sqrt(sampleVariance);
    }
}
class DiffCalculator {
    constructor(query, observableResults) {
        this.query = query;
        this.observableResults = observableResults;
        this.evalRegistry = EvalRegistry.get();
        this.columns = this.detectColumns();
    }
    applyDiff(oldResults, newResults) {
        const oldEntries = oldResults === null ? [] : oldResults.entries;
        const longestCommonSubsequenceLeft = MathHelper.longestCommonSubsequence(oldEntries, newResults.entries, this.comparator.bind(this), (indexLeft, indexRight) => oldEntries[indexLeft]);
        const changeRecords = [];
        let commonIndex = 0;
        for (let i = 0; i < oldEntries.length; i++) {
            const entry = oldEntries[i];
            if (longestCommonSubsequenceLeft[commonIndex] === entry) {
                commonIndex++;
                continue;
            }
            else {
                const removed = this.observableResults.splice(commonIndex, 1);
                const changeRecord = this.createChangeRecord(i, removed, 0, this.observableResults);
                changeRecords.push(changeRecord);
            }
        }
        const longestCommonSubsequenceRight = MathHelper.longestCommonSubsequence(oldEntries, newResults.entries, this.comparator.bind(this), (indexLeft, indexRight) => newResults.entries[indexRight]);
        commonIndex = 0;
        for (let i = 0; i < newResults.entries.length; i++) {
            const entry = newResults.entries[i];
            if (longestCommonSubsequenceRight[commonIndex] === entry) {
                commonIndex++;
                continue;
            }
            else {
                this.observableResults.splice(i, 0, entry.row.payload());
                const changeRecord = this.createChangeRecord(i, [], 1, this.observableResults);
                changeRecords.push(changeRecord);
            }
        }
        return changeRecords;
    }
    detectColumns() {
        if (this.query.columns.length > 0) {
            return this.query.columns;
        }
        else {
            const columns = [];
            this.query.from.forEach(t => {
                const table = t;
                table.getColumns().forEach(column => columns.push(column));
            });
            return columns;
        }
    }
    comparator(left, right) {
        return this.columns.every(column => {
            if (column.getType() === Type.OBJECT ||
                column.getType() === Type.ARRAY_BUFFER) {
                return left.getField(column) === right.getField(column);
            }
            const evalFn = this.evalRegistry.getEvaluator(column.getType(), EvalType.EQ);
            return evalFn(left.getField(column), right.getField(column));
        }, this);
    }
    createChangeRecord(index, removed, addedCount, object) {
        return {
            addedCount,
            index,
            object,
            removed,
            type: 'splice',
        };
    }
}
class ObserverRegistryEntry {
    constructor(builder) {
        this.builder = builder;
        this.builder = builder;
        this.observers = new Set();
        this.observable = [];
        this.lastResults = null;
        const context = builder.getObservableQuery();
        this.diffCalculator = new DiffCalculator(context, this.observable);
    }
    addObserver(callback) {
        if (this.observers.has(callback)) {
            assert(false, 'Attempted to register observer twice.');
            return;
        }
        this.observers.add(callback);
    }
    removeObserver(callback) {
        return this.observers.delete(callback);
    }
    getTaskItem() {
        return this.builder.getObservableTaskItem();
    }
    hasObservers() {
        return this.observers.size > 0;
    }
    updateResults(newResults) {
        const changeRecords = this.diffCalculator.applyDiff(this.lastResults, newResults);
        this.lastResults = newResults;
        if (changeRecords.length > 0) {
            this.observers.forEach(observerFn => observerFn(changeRecords));
        }
    }
}
class ObserverRegistry {
    constructor() {
        this.entries = new Map();
    }
    addObserver(query, callback) {
        const builder = query;
        const queryId = this.getQueryId(builder.getObservableQuery());
        let entry = this.entries.get(queryId) || null;
        if (entry === null) {
            entry = new ObserverRegistryEntry(builder);
            this.entries.set(queryId, entry);
        }
        entry.addObserver(callback);
    }
    removeObserver(query, callback) {
        const builder = query;
        const queryId = this.getQueryId(builder.getObservableQuery());
        const entry = this.entries.get(queryId);
        assert(entry !== undefined && entry !== null, 'Attempted to unobserve a query that was not observed.');
        const didRemove = entry.removeObserver(callback);
        assert(didRemove, 'removeObserver: Inconsistent state detected.');
        if (!entry.hasObservers()) {
            this.entries.delete(queryId);
        }
    }
    getTaskItemsForTables(tables) {
        const tableSet = new Set();
        tables.forEach(table => tableSet.add(table.getName()));
        const items = [];
        this.entries.forEach(entry => {
            const item = entry.getTaskItem();
            const refersToTables = item.context.from.some(table => tableSet.has(table.getName()));
            if (refersToTables) {
                items.push(item);
            }
        });
        return items;
    }
    updateResultsForQuery(query, results) {
        const queryId = this.getQueryId(query.clonedFrom !== undefined && query.clonedFrom !== null
            ? query.clonedFrom
            : query);
        const entry = this.entries.get(queryId) || null;
        if (entry !== null) {
            entry.updateResults(results);
            return true;
        }
        return false;
    }
    getQueryId(query) {
        return query.getUniqueId();
    }
}
class Service {
}
Service.BACK_STORE = new ServiceId('backstore');
Service.CACHE = new ServiceId('cache');
Service.INDEX_STORE = new ServiceId('indexstore');
Service.QUERY_ENGINE = new ServiceId('engine');
Service.RUNNER = new ServiceId('runner');
Service.OBSERVER_REGISTRY = new ServiceId('observerregistry');
Service.SCHEMA = new ServiceId('schema');
class ConstraintChecker {
    static didColumnValueChange(rowBefore, rowAfter, indexName) {
        const deletionOrAddition = rowBefore === null ? rowAfter !== null : rowAfter === null;
        return (deletionOrAddition ||
            rowBefore.keyOfIndex(indexName) !== rowAfter.keyOfIndex(indexName));
    }
    constructor(global) {
        this.indexStore = global.getService(Service.INDEX_STORE);
        this.schema = global.getService(Service.SCHEMA);
        this.cache = global.getService(Service.CACHE);
        this.foreignKeysParentIndices = new Map();
    }
    findExistingRowIdInPkIndex(table, row) {
        const pkIndexSchema = table.getConstraint().getPrimaryKey();
        if (pkIndexSchema === null) {
            return null;
        }
        return this.findExistingRowIdInIndex(pkIndexSchema, row);
    }
    checkNotNullable(table, rows) {
        const notNullable = table.getConstraint().getNotNullable();
        rows.forEach(row => {
            notNullable.forEach(column => {
                const target = row.payload()[column.getName()];
                if (!(target !== null && target !== undefined)) {
                    throw new Exception(ErrorCode.NOT_NULLABLE, column.getNormalizedName());
                }
            }, this);
        }, this);
    }
    detectCascadeUpdates(table, modifications, foreignKeySpecs) {
        const cascadedUpdates = new MapSet();
        this.loopThroughReferringRows(foreignKeySpecs, modifications, (foreignKeySpec, childIndex, parentKey, modification) => {
            const childRowIds = childIndex.get(parentKey);
            childRowIds.forEach(rowId => {
                cascadedUpdates.set(rowId, {
                    fkSpec: foreignKeySpec,
                    originalUpdatedRow: modification[1],
                });
            });
        });
        return cascadedUpdates;
    }
    checkForeignKeysForInsert(table, rows, constraintTiming) {
        if (rows.length === 0) {
            return;
        }
        const modifications = rows.map(row => {
            return [null, row];
        });
        this.checkReferredKeys(table, modifications, constraintTiming);
    }
    checkForeignKeysForUpdate(table, modifications, constraintTiming) {
        if (modifications.length === 0) {
            return;
        }
        this.checkReferredKeys(table, modifications, constraintTiming);
        this.checkReferringKeys(table, modifications, constraintTiming, ConstraintAction.RESTRICT);
    }
    checkForeignKeysForDelete(table, rows, constraintTiming) {
        if (rows.length === 0) {
            return;
        }
        const modifications = rows.map(row => {
            return [row, null];
        });
        this.checkReferringKeys(table, modifications, constraintTiming);
    }
    detectCascadeDeletion(table, rows) {
        const result = {
            rowIdsPerTable: new MapSet(),
            tableOrder: [],
        };
        let lastRowIdsToDelete = new MapSet();
        lastRowIdsToDelete.setMany(table.getName(), rows.map(row => row.id()));
        do {
            const newRowIdsToDelete = new MapSet();
            lastRowIdsToDelete.keys().forEach(tableName => {
                const tbl = this.schema.table(tableName);
                const rowIds = lastRowIdsToDelete.get(tableName);
                const modifications = rowIds.map(rowId => {
                    const row = this.cache.get(rowId);
                    return [row, null];
                }, this);
                const referringRowIds = this.findReferringRowIds(tbl, modifications);
                if (referringRowIds !== null) {
                    result.tableOrder.unshift(...referringRowIds.keys());
                    newRowIdsToDelete.merge(referringRowIds);
                }
            }, this);
            lastRowIdsToDelete = newRowIdsToDelete;
            result.rowIdsPerTable.merge(lastRowIdsToDelete);
        } while (lastRowIdsToDelete.size > 0);
        return result;
    }
    findExistingRowIdInIndex(indexSchema, row) {
        const indexName = indexSchema.getNormalizedName();
        const indexKey = row.keyOfIndex(indexName);
        const index = this.indexStore.get(indexName);
        const rowIds = index.get(indexKey);
        return rowIds.length === 0 ? null : rowIds[0];
    }
    checkReferredKeys(table, modifications, constraintTiming) {
        const foreignKeySpecs = table.getConstraint().getForeignKeys();
        foreignKeySpecs.forEach(foreignKeySpec => {
            if (foreignKeySpec.timing === constraintTiming) {
                this.checkReferredKey(foreignKeySpec, modifications);
            }
        }, this);
    }
    checkReferredKey(foreignKeySpec, modifications) {
        const parentIndex = this.getParentIndex(foreignKeySpec);
        modifications.forEach(modification => {
            const didColumnValueChange = ConstraintChecker.didColumnValueChange(modification[0], modification[1], foreignKeySpec.name);
            if (didColumnValueChange) {
                const rowAfter = modification[1];
                const parentKey = rowAfter.keyOfIndex(foreignKeySpec.name);
                if (parentKey !== null && !parentIndex.containsKey(parentKey)) {
                    throw new Exception(ErrorCode.FK_VIOLATION, foreignKeySpec.name);
                }
            }
        }, this);
    }
    findParentIndex(foreignKeySpec) {
        const parentTable = this.schema.table(foreignKeySpec.parentTable);
        const parentColumn = parentTable[foreignKeySpec.parentColumn];
        const parentIndexSchema = parentColumn.getIndex();
        return this.indexStore.get(parentIndexSchema.getNormalizedName());
    }
    getParentIndex(foreignKeySpec) {
        let parentIndex = this.foreignKeysParentIndices.get(foreignKeySpec.name);
        if (parentIndex === undefined) {
            parentIndex = this.findParentIndex(foreignKeySpec);
            this.foreignKeysParentIndices.set(foreignKeySpec.name, parentIndex);
        }
        return parentIndex;
    }
    checkReferringKeys(table, modifications, constraintTiming, constraintAction) {
        let foreignKeySpecs = Info.from(this.schema).getReferencingForeignKeys(table.getName(), constraintAction);
        if (foreignKeySpecs === null) {
            return;
        }
        foreignKeySpecs = foreignKeySpecs.filter(foreignKeySpec => {
            return foreignKeySpec.timing === constraintTiming;
        });
        if (foreignKeySpecs.length === 0) {
            return;
        }
        this.loopThroughReferringRows(foreignKeySpecs, modifications, (foreignKeySpec, childIndex, parentKey) => {
            if (childIndex.containsKey(parentKey)) {
                throw new Exception(ErrorCode.FK_VIOLATION, foreignKeySpec.name);
            }
        });
    }
    findReferringRowIds(table, modifications) {
        const foreignKeySpecs = Info.from(this.schema).getReferencingForeignKeys(table.getName(), ConstraintAction.CASCADE);
        if (foreignKeySpecs === null) {
            return null;
        }
        const referringRowIds = new MapSet();
        this.loopThroughReferringRows(foreignKeySpecs, modifications, (foreignKeySpec, childIndex, parentKey) => {
            const childRowIds = childIndex.get(parentKey);
            if (childRowIds.length > 0) {
                referringRowIds.setMany(foreignKeySpec.childTable, childRowIds);
            }
        });
        return referringRowIds;
    }
    loopThroughReferringRows(foreignKeySpecs, modifications, callbackFn) {
        foreignKeySpecs.forEach(foreignKeySpec => {
            const childIndex = this.indexStore.get(foreignKeySpec.name);
            const parentIndex = this.getParentIndex(foreignKeySpec);
            modifications.forEach(modification => {
                const didColumnValueChange = ConstraintChecker.didColumnValueChange(modification[0], modification[1], parentIndex.getName());
                if (didColumnValueChange) {
                    const rowBefore = modification[0];
                    const parentKey = rowBefore.keyOfIndex(parentIndex.getName());
                    callbackFn(foreignKeySpec, childIndex, parentKey, modification);
                }
            }, this);
        }, this);
    }
}
class TableDiff {
    constructor(name) {
        this.name = name;
        this.added = new Map();
        this.modified = new Map();
        this.deleted = new Map();
    }
    getName() {
        return this.name;
    }
    getAdded() {
        return this.added;
    }
    getModified() {
        return this.modified;
    }
    getDeleted() {
        return this.deleted;
    }
    add(row) {
        if (this.deleted.has(row.id())) {
            const modification = [
                this.deleted.get(row.id()),
                row,
            ];
            this.modified.set(row.id(), modification);
            this.deleted.delete(row.id());
        }
        else {
            this.added.set(row.id(), row);
        }
    }
    modify(modification) {
        const oldValue = modification[0];
        const newValue = modification[1];
        assert(oldValue.id() === newValue.id(), 'Row ID mismatch between old/new values.');
        const id = oldValue.id();
        if (this.added.has(id)) {
            this.added.set(id, newValue);
        }
        else if (this.modified.has(id)) {
            const overallModification = [
                this.modified.get(id)[0],
                newValue,
            ];
            this.modified.set(id, overallModification);
        }
        else {
            this.modified.set(id, modification);
        }
    }
    delete(row) {
        if (this.added.has(row.id())) {
            this.added.delete(row.id());
        }
        else if (this.modified.has(row.id())) {
            const originalRow = this.modified.get(row.id())[0];
            this.modified.delete(row.id());
            this.deleted.set(row.id(), originalRow);
        }
        else {
            this.deleted.set(row.id(), row);
        }
    }
    merge(other) {
        other.added.forEach(row => this.add(row));
        other.modified.forEach(modification => this.modify(modification));
        other.deleted.forEach(row => this.delete(row));
    }
    getAsModifications() {
        const modifications = [];
        this.added.forEach(row => modifications.push([null, row]));
        this.modified.forEach(modification => modifications.push(modification));
        this.deleted.forEach(row => modifications.push([row, null]));
        return modifications;
    }
    toString() {
        return (`[${Array.from(this.added.keys()).toString()}], ` +
            `[${Array.from(this.modified.keys()).toString()}], ` +
            `[${Array.from(this.deleted.keys()).toString()}]`);
    }
    getReverse() {
        const reverseDiff = new TableDiff(this.name);
        this.added.forEach(row => reverseDiff.delete(row));
        this.deleted.forEach(row => reverseDiff.add(row));
        this.modified.forEach(modification => {
            reverseDiff.modify([modification[1], modification[0]]);
        });
        return reverseDiff;
    }
    isEmpty() {
        return (this.added.size === 0 &&
            this.deleted.size === 0 &&
            this.modified.size === 0);
    }
}
class InMemoryUpdater {
    constructor(global) {
        this.cache = global.getService(Service.CACHE);
        this.indexStore = global.getService(Service.INDEX_STORE);
        this.schema = global.getService(Service.SCHEMA);
    }
    update(tableDiffs) {
        tableDiffs.forEach(tableDiff => {
            this.updateIndicesForDiff(tableDiff);
            this.updateCacheForDiff(tableDiff);
        }, this);
    }
    updateTableIndicesForRow(table, modification) {
        const indices = this.indexStore.getTableIndices(table.getName());
        let updatedIndices = 0;
        indices.forEach(index => {
            try {
                this.updateTableIndexForRow(index, modification);
                updatedIndices++;
            }
            catch (e) {
                indices.slice(0, updatedIndices).forEach(idx => {
                    this.updateTableIndexForRow(idx, [modification[1], modification[0]]);
                }, this);
                throw e;
            }
        }, this);
    }
    updateCacheForDiff(diff) {
        const tableName = diff.getName();
        diff
            .getDeleted()
            .forEach((row, rowId) => this.cache.remove(tableName, rowId));
        diff.getAdded().forEach(row => this.cache.set(tableName, row));
        diff
            .getModified()
            .forEach(modification => this.cache.set(tableName, modification[1]));
    }
    updateIndicesForDiff(diff) {
        const table = this.schema.table(diff.getName());
        const modifications = diff.getAsModifications();
        modifications.forEach(modification => {
            this.updateTableIndicesForRow(table, modification);
        }, this);
    }
    updateTableIndexForRow(index, modification) {
        const keyNow = modification[1] === null
            ? undefined
            : modification[1].keyOfIndex(index.getName());
        const keyThen = modification[0] === null
            ? undefined
            : modification[0].keyOfIndex(index.getName());
        if (keyThen === undefined && keyNow !== undefined) {
            index.add(keyNow, modification[1].id());
        }
        else if (keyThen !== undefined && keyNow !== undefined) {
            if (keyNow === null || keyThen === null) {
                if (keyNow === keyThen) {
                    return;
                }
            }
            else if (index.comparator().compare(keyThen, keyNow) === Favor.TIE) {
                return;
            }
            index.add(keyNow, modification[1].id());
            index.remove(keyThen, modification[0].id());
        }
        else if (keyThen !== undefined && keyNow === undefined) {
            index.remove(keyThen, modification[0].id());
        }
    }
}
class Journal {
    constructor(global, txScope) {
        this.scope = new Map();
        txScope.forEach(tableSchema => this.scope.set(tableSchema.getName(), tableSchema));
        this.schema = global.getService(Service.SCHEMA);
        this.cache = global.getService(Service.CACHE);
        this.indexStore = global.getService(Service.INDEX_STORE);
        this.constraintChecker = new ConstraintChecker(global);
        this.inMemoryUpdater = new InMemoryUpdater(global);
        this.terminated = false;
        this.pendingRollback = false;
        this.tableDiffs = new Map();
    }
    getDiff() {
        return this.tableDiffs;
    }
    getIndexDiff() {
        const tableSchemas = Array.from(this.tableDiffs.keys()).map(tableName => this.scope.get(tableName));
        const indices = [];
        tableSchemas.forEach(tblSchema => {
            const tableSchema = tblSchema;
            if (tableSchema.persistentIndex()) {
                const tableIndices = tableSchema.getIndices();
                tableIndices.forEach(indexSchema => {
                    indices.push(this.indexStore.get(indexSchema.getNormalizedName()));
                }, this);
                indices.push(this.indexStore.get(tableSchema.getName() + '.#'));
            }
        }, this);
        return indices;
    }
    getScope() {
        return this.scope;
    }
    insert(t, rows) {
        const table = t;
        this.assertJournalWritable();
        this.checkScope(table);
        this.constraintChecker.checkNotNullable(table, rows);
        this.constraintChecker.checkForeignKeysForInsert(table, rows, ConstraintTiming.IMMEDIATE);
        rows.forEach(row => {
            this.modifyRow(table, [null, row]);
        }, this);
    }
    update(t, rows) {
        const table = t;
        this.assertJournalWritable();
        this.checkScope(table);
        this.constraintChecker.checkNotNullable(table, rows);
        const modifications = rows.map(row => {
            const rowBefore = this.cache.get(row.id());
            return [rowBefore, row];
        }, this);
        this.updateByCascade(table, modifications);
        this.constraintChecker.checkForeignKeysForUpdate(table, modifications, ConstraintTiming.IMMEDIATE);
        modifications.forEach(modification => this.modifyRow(table, modification));
    }
    insertOrReplace(t, rows) {
        const table = t;
        this.assertJournalWritable();
        this.checkScope(table);
        this.constraintChecker.checkNotNullable(table, rows);
        rows.forEach(rowNow => {
            let rowBefore = null;
            const existingRowId = this.constraintChecker.findExistingRowIdInPkIndex(table, rowNow);
            if (existingRowId !== undefined && existingRowId !== null) {
                rowBefore = this.cache.get(existingRowId);
                rowNow.assignRowId(existingRowId);
                const modification = [rowBefore, rowNow];
                this.constraintChecker.checkForeignKeysForUpdate(table, [modification], ConstraintTiming.IMMEDIATE);
            }
            else {
                this.constraintChecker.checkForeignKeysForInsert(table, [rowNow], ConstraintTiming.IMMEDIATE);
            }
            this.modifyRow(table, [rowBefore, rowNow]);
        }, this);
    }
    remove(t, rows) {
        const table = t;
        this.assertJournalWritable();
        this.checkScope(table);
        this.removeByCascade(table, rows);
        this.constraintChecker.checkForeignKeysForDelete(table, rows, ConstraintTiming.IMMEDIATE);
        rows.forEach(row => {
            this.modifyRow(table, [row, null]);
        }, this);
    }
    checkDeferredConstraints() {
        this.tableDiffs.forEach(tableDiff => {
            const table = this.scope.get(tableDiff.getName());
            this.constraintChecker.checkForeignKeysForInsert(table, Array.from(tableDiff.getAdded().values()), ConstraintTiming.DEFERRABLE);
            this.constraintChecker.checkForeignKeysForDelete(table, Array.from(tableDiff.getDeleted().values()), ConstraintTiming.DEFERRABLE);
            this.constraintChecker.checkForeignKeysForUpdate(table, Array.from(tableDiff.getModified().values()), ConstraintTiming.DEFERRABLE);
        }, this);
    }
    commit() {
        this.assertJournalWritable();
        this.terminated = true;
    }
    rollback() {
        assert(!this.terminated, 'Attempted to rollback a terminated journal.');
        const reverseDiffs = Array.from(this.tableDiffs.values()).map(tableDiff => tableDiff.getReverse());
        this.inMemoryUpdater.update(reverseDiffs);
        this.terminated = true;
        this.pendingRollback = false;
    }
    assertJournalWritable() {
        assert(!this.pendingRollback, 'Attempted to use journal that needs to be rolled back.');
        assert(!this.terminated, 'Attempted to commit a terminated journal.');
    }
    checkScope(tableSchema) {
        if (!this.scope.has(tableSchema.getName())) {
            throw new Exception(ErrorCode.OUT_OF_SCOPE, tableSchema.getName());
        }
    }
    modifyRow(table, modification) {
        const tableName = table.getName();
        const diff = this.tableDiffs.get(tableName) || new TableDiff(tableName);
        this.tableDiffs.set(tableName, diff);
        try {
            this.inMemoryUpdater.updateTableIndicesForRow(table, modification);
        }
        catch (e) {
            this.pendingRollback = true;
            throw e;
        }
        const rowBefore = modification[0];
        const rowNow = modification[1];
        if (rowBefore === null && rowNow !== null) {
            this.cache.set(tableName, rowNow);
            diff.add(rowNow);
        }
        else if (rowBefore !== null && rowNow !== null) {
            this.cache.set(tableName, rowNow);
            diff.modify(modification);
        }
        else if (rowBefore !== null && rowNow === null) {
            this.cache.remove(tableName, rowBefore.id());
            diff.delete(rowBefore);
        }
    }
    updateByCascade(table, modifications) {
        const foreignKeySpecs = Info.from(this.schema).getReferencingForeignKeys(table.getName(), ConstraintAction.CASCADE);
        if (foreignKeySpecs === null) {
            return;
        }
        const cascadedUpdates = this.constraintChecker.detectCascadeUpdates(table, modifications, foreignKeySpecs);
        cascadedUpdates.keys().forEach(rowId => {
            const updates = cascadedUpdates.get(rowId);
            updates.forEach(update => {
                const tbl = this.schema.table(update.fkSpec.childTable);
                const rowBefore = this.cache.get(rowId);
                const rowAfter = tbl.deserializeRow(rowBefore.serialize());
                rowAfter.payload()[update.fkSpec.childColumn] =
                    update.originalUpdatedRow.payload()[update.fkSpec.parentColumn];
                this.modifyRow(tbl, [rowBefore, rowAfter]);
            }, this);
        }, this);
    }
    removeByCascade(table, deletedRows) {
        const foreignKeySpecs = Info.from(this.schema).getReferencingForeignKeys(table.getName(), ConstraintAction.CASCADE);
        if (foreignKeySpecs === null) {
            return;
        }
        const cascadeDeletion = this.constraintChecker.detectCascadeDeletion(table, deletedRows);
        const cascadeRowIds = cascadeDeletion.rowIdsPerTable;
        cascadeDeletion.tableOrder.forEach(tableName => {
            const tbl = this.schema.table(tableName);
            const rows = cascadeRowIds.get(tableName).map(rowId => {
                return this.cache.get(rowId);
            }, this);
            this.constraintChecker.checkForeignKeysForDelete(tbl, rows, ConstraintTiming.IMMEDIATE);
            rows.forEach(row => {
                this.modifyRow(tbl, [row, null]);
            }, this);
        }, this);
    }
}
class BaseTx {
    constructor(txType, journal) {
        this.txType = txType;
        this.journal = journal || null;
        this.resolver = new Resolver();
        this.success = false;
        this.statsObject = null;
    }
    getJournal() {
        return this.journal;
    }
    commit() {
        const promise = this.txType === TransactionType.READ_ONLY
            ? this.commitInternal()
            : this.commitReadWrite();
        return promise.then((results) => {
            this.success = true;
            return results;
        });
    }
    stats() {
        if (this.statsObject === null) {
            if (!this.success) {
                this.statsObject = TransactionStatsImpl.getDefault();
            }
            else if (this.txType === TransactionType.READ_ONLY) {
                this.statsObject = new TransactionStatsImpl(true, 0, 0, 0, 0);
            }
            else {
                const diff = this.journal.getDiff();
                let insertedRows = 0;
                let deletedRows = 0;
                let updatedRows = 0;
                let tablesChanged = 0;
                diff.forEach(tableDiff => {
                    tablesChanged++;
                    insertedRows += tableDiff.getAdded().size;
                    updatedRows += tableDiff.getModified().size;
                    deletedRows += tableDiff.getDeleted().size;
                });
                this.statsObject = new TransactionStatsImpl(true, insertedRows, updatedRows, deletedRows, tablesChanged);
            }
        }
        return this.statsObject;
    }
    commitReadWrite() {
        try {
            this.journal.checkDeferredConstraints();
        }
        catch (e) {
            return Promise.reject(e);
        }
        return this.mergeIntoBackstore().then(results => {
            this.journal.commit();
            return results;
        });
    }
    mergeIntoBackstore() {
        this.mergeTableChanges();
        this.mergeIndexChanges();
        return this.commitInternal();
    }
    mergeTableChanges() {
        const journal = this.journal;
        const diff = journal.getDiff();
        diff.forEach((tableDiff, tableName) => {
            const tableSchema = journal.getScope().get(tableName);
            const table = this.getTable(tableSchema.getName(), tableSchema.deserializeRow.bind(tableSchema), TableType.DATA);
            const toDeleteRowIds = Array.from(tableDiff.getDeleted().values()).map(row => row.id());
            const toPut = Array.from(tableDiff.getModified().values())
                .map(modification => modification[1])
                .concat(Array.from(tableDiff.getAdded().values()));
            const shouldDisableClearTableOptimization = toPut.length > 0;
            if (toDeleteRowIds.length > 0) {
                table.remove(toDeleteRowIds, shouldDisableClearTableOptimization).then(() => { }, (e) => this.resolver.reject(e));
            }
            table.put(toPut).then(() => { }, (e) => this.resolver.reject(e));
        }, this);
    }
    mergeIndexChanges() {
        const indices = this.journal.getIndexDiff();
        indices.forEach(index => {
            const indexTable = this.getTable(index.getName(), Row.deserialize, TableType.INDEX);
            indexTable.remove([]);
            indexTable.put(index.serialize());
        }, this);
    }
}
class Page {
    static deserialize(data) {
        return new Page(data.id, JSON.parse(data.value));
    }
    static toPageIds(rowIds) {
        const pageIds = new Set();
        rowIds.forEach(id => pageIds.add(Page.toPageId(id)));
        return Array.from(pageIds.values());
    }
    static toPageId(rowId) {
        return rowId >> Page.BUNDLE_EXPONENT;
    }
    static getPageRange(pageId) {
        return [
            pageId << Page.BUNDLE_EXPONENT,
            ((pageId + 1) << Page.BUNDLE_EXPONENT) - 1,
        ];
    }
    constructor(id, payload = {}) {
        this.id = id;
        this.payload = payload;
    }
    getId() {
        return this.id;
    }
    getPayload() {
        return this.payload;
    }
    setRows(rows) {
        rows.forEach(row => (this.payload[row.id()] = row.serialize()));
    }
    removeRows(ids) {
        ids.forEach(id => delete this.payload[id]);
    }
    serialize() {
        return {
            id: this.id,
            value: JSON.stringify(this.payload),
        };
    }
}
Page.BUNDLE_EXPONENT = 9;
class BundledObjectStore {
    static forTableType(global, store, deserializeFn, tableType) {
        const retrievePageFn = tableType === TableType.DATA
            ? BundledObjectStore.getDataTablePage.bind(null, global)
            : BundledObjectStore.getIndexTablePage;
        return new BundledObjectStore(store, deserializeFn, retrievePageFn);
    }
    static getDataTablePage(global, tableName, pageId) {
        const cache = global.getService(Service.CACHE);
        const range = Page.getPageRange(pageId);
        const rows = cache.getRange(tableName, range[0], range[1]);
        const page = new Page(pageId);
        page.setRows(rows);
        return page;
    }
    static getIndexTablePage(tableName, pageId) {
        return new Page(pageId);
    }
    constructor(store, deserializeFn, retrievePageFn) {
        this.store = store;
        this.deserializeFn = deserializeFn;
        this.retrievePageFn = retrievePageFn;
    }
    get(ids) {
        if (ids.length === 0) {
            return this.getAll();
        }
        return this.getPagesByRowIds(ids).then(pages => {
            return ids.map(id => {
                const page = pages.get(Page.toPageId(id));
                assert(page !== undefined, 'Containing page is empty');
                return this.deserializeFn(page.getPayload()[id]);
            });
        });
    }
    put(rows) {
        if (rows.length === 0) {
            return Promise.resolve();
        }
        const pages = new Map();
        rows.forEach(row => {
            const pageId = Page.toPageId(row.id());
            let page = pages.get(pageId) || null;
            if (page === null) {
                page = this.retrievePageFn(this.store.name, pageId);
            }
            page.setRows([row]);
            pages.set(pageId, page);
        }, this);
        const promises = Array.from(pages.values()).map(page => {
            return this.performWriteOp(() => {
                return this.store.put(page.serialize());
            });
        }, this);
        return Promise.all(promises).then(() => {
            return;
        });
    }
    remove(ids, disableClearTableOptimization) {
        if (ids.length === 0) {
            return this.performWriteOp(() => this.store.clear());
        }
        const pages = new Map();
        ids.forEach(id => {
            const pageId = Page.toPageId(id);
            let page = pages.get(pageId) || null;
            if (page === null) {
                page = this.retrievePageFn(this.store.name, pageId);
            }
            page.removeRows([id]);
            pages.set(pageId, page);
        }, this);
        const promises = Array.from(pages.values()).map(page => {
            return this.performWriteOp(() => {
                return Object.keys(page.getPayload()).length === 0
                    ? this.store.delete(page.getId())
                    : this.store.put(page.serialize());
            });
        }, this);
        return Promise.all(promises).then(() => {
            return;
        });
    }
    getPagesByRowIds(rowIds) {
        const results = new Map();
        const resolver = new Resolver();
        const pageIds = Page.toPageIds(rowIds);
        const promises = pageIds.map(id => {
            return new Promise((resolve, reject) => {
                let request;
                try {
                    request = this.store.get(id);
                }
                catch (e) {
                    reject(e);
                    return;
                }
                request.onerror = reject;
                request.onsuccess = ev => {
                    const page = Page.deserialize(ev.target.result);
                    results.set(page.getId(), page);
                    resolve(undefined);
                };
            });
        }, this);
        Promise.all(promises).then(() => resolver.resolve(results));
        return resolver.promise;
    }
    getAll() {
        return new Promise((resolve, reject) => {
            const rows = [];
            let request;
            try {
                request = this.store.openCursor();
            }
            catch (e) {
                reject(e);
                return;
            }
            request.onerror = reject;
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    const page = Page.deserialize(cursor.value);
                    const data = page.getPayload();
                    Object.keys(data).forEach(key => rows.push(this.deserializeFn(data[key])));
                    cursor.continue();
                }
                else {
                    resolve(rows);
                }
            };
        });
    }
    performWriteOp(reqFactory) {
        return new Promise((resolve, reject) => {
            let request;
            try {
                request = reqFactory();
            }
            catch (e) {
                reject(e);
                return;
            }
            request.onsuccess = () => resolve();
            request.onerror = reject;
        });
    }
}
class ExternalChangeTask extends UniqueId {
    constructor(global, tableDiffs) {
        super();
        this.global = global;
        this.tableDiffs = tableDiffs;
        this.observerRegistry = this.global.getService(Service.OBSERVER_REGISTRY);
        this.runner = this.global.getService(Service.RUNNER);
        this.inMemoryUpdater = new InMemoryUpdater(this.global);
        const dbSchema = this.global.getService(Service.SCHEMA);
        const tableSchemas = this.tableDiffs.map(td => dbSchema.table(td.getName()));
        this.scope = new Set(tableSchemas);
        this.resolver = new Resolver();
    }
    exec() {
        this.inMemoryUpdater.update(this.tableDiffs);
        this.scheduleObserverTask();
        return Promise.resolve([]);
    }
    getType() {
        return TransactionType.READ_WRITE;
    }
    getScope() {
        return this.scope;
    }
    getResolver() {
        return this.resolver;
    }
    getId() {
        return this.getUniqueNumber();
    }
    getPriority() {
        return TaskPriority.EXTERNAL_CHANGE_TASK;
    }
    scheduleObserverTask() {
        const items = this.observerRegistry.getTaskItemsForTables(Array.from(this.scope.values()));
        if (items.length !== 0) {
            const observerTask = new ObserverQueryTask(this.global, items);
            this.runner.scheduleTask(observerTask);
        }
    }
}
class ExternalChangeObserver {
    constructor(global) {
        this.global = global;
        this.backStore = global.getService(Service.BACK_STORE);
        this.runner = global.getService(Service.RUNNER);
    }
    startObserving() {
        this.backStore.subscribe(this.onChange.bind(this));
    }
    stopObserving() {
        this.backStore.unsubscribe(this.onChange.bind(this));
    }
    onChange(tableDiffs) {
        const externalChangeTask = new ExternalChangeTask(this.global, tableDiffs);
        this.runner.scheduleTask(externalChangeTask);
    }
}
class IndexedDBRawBackStore {
    static convert(value) {
        let ret = null;
        if (value instanceof ArrayBuffer) {
            ret = Row.binToHex(value);
        }
        else if (value instanceof Date) {
            ret = value.getTime();
        }
        else {
            ret = value;
        }
        return ret;
    }
    constructor(version, db, tx, bundleMode) {
        this.version = version;
        this.db = db;
        this.tx = tx;
        this.bundleMode = bundleMode;
    }
    getRawDBInstance() {
        return this.db;
    }
    getRawTransaction() {
        return this.tx;
    }
    dropTable(tableName) {
        return new Promise((resolve, reject) => {
            try {
                this.db.deleteObjectStore(tableName);
            }
            catch (e) {
                reject(e);
                return;
            }
            resolve();
        });
    }
    addTableColumn(tableName, columnName, defaultValue) {
        const value = IndexedDBRawBackStore.convert(defaultValue);
        return this.transformRows(tableName, (row) => {
            row.payload()[columnName] = value;
        });
    }
    dropTableColumn(tableName, columnName) {
        return this.transformRows(tableName, (row) => {
            delete row.payload()[columnName];
        });
    }
    renameTableColumn(tableName, oldColumnName, newColumnName) {
        return this.transformRows(tableName, (row) => {
            row.payload()[newColumnName] = row.payload()[oldColumnName];
            delete row.payload()[oldColumnName];
        });
    }
    createRow(payload) {
        const data = {};
        Object.keys(payload).forEach(key => {
            data[key] = IndexedDBRawBackStore.convert(payload[key]);
        });
        return Row.create(data);
    }
    getVersion() {
        return this.version;
    }
    dump() {
        const tables = this.db.objectStoreNames;
        const promises = [];
        for (let i = 0; i < tables.length; ++i) {
            const tableName = tables.item(i);
            promises.push(this.dumpTable(tableName));
        }
        return Promise.all(promises).then(tableDumps => {
            const results = {};
            tableDumps.forEach((tableDump, index) => {
                results[tables.item(index)] = tableDump;
            });
            return results;
        });
    }
    openCursorForWrite(tableName, loopFunc, endFunc) {
        return new Promise((resolve, reject) => {
            let req;
            let store;
            try {
                store = this.tx.objectStore(tableName);
                req = store.openCursor();
            }
            catch (e) {
                reject(e);
                return;
            }
            req.onsuccess = () => {
                const cursor = req.result;
                if (cursor) {
                    loopFunc(cursor);
                    cursor.continue();
                }
                else {
                    endFunc(store);
                    resolve();
                }
            };
            req.onerror = reject;
        });
    }
    transformRows(tableName, rowFn) {
        const loopFunc = (cursor) => {
            const row = Row.deserialize(cursor.value);
            rowFn(row);
            cursor.update(row.serialize());
        };
        const loopFuncBundle = (cursor) => {
            const page = Page.deserialize(cursor.value);
            const data = page.getPayload();
            Object.keys(data).forEach(rowId => {
                const row = Row.deserialize(data[rowId]);
                rowFn(row);
                data[rowId] = row.serialize();
            });
            cursor.update(page.serialize());
        };
        const endFunc = () => {
            return;
        };
        return this.openCursorForWrite(tableName, this.bundleMode ? loopFuncBundle : loopFunc, endFunc);
    }
    getTableRows(tableName) {
        const results = [];
        return new Promise((resolve, reject) => {
            let req;
            try {
                req = this.tx.objectStore(tableName).openCursor();
            }
            catch (e) {
                reject(e);
                return;
            }
            req.onsuccess = () => {
                const cursor = req.result;
                if (cursor) {
                    if (this.bundleMode) {
                        const page = Page.deserialize(cursor.value);
                        const data = page.getPayload();
                        Object.keys(data).forEach(rowId => {
                            results.push(data[rowId]);
                        });
                    }
                    else {
                        results.push(cursor.value);
                    }
                    cursor.continue();
                }
                else {
                    resolve(results);
                }
            };
            req.onerror = reject;
        });
    }
    dumpTable(tableName) {
        return this.getTableRows(tableName).then(rawRows => rawRows.map(rawRow => rawRow.value));
    }
}
class ObjectStore {
    constructor(store, deserializeFn) {
        this.store = store;
        this.deserializeFn = deserializeFn;
    }
    get(ids) {
        if (ids.length === 0) {
            const options = Global.get().getOptions();
            return options.useGetAll ? this.getAllBulk() : this.getAllWithCursor();
        }
        const promises = ids.map(id => {
            return new Promise((resolve, reject) => {
                let request;
                try {
                    request = this.store.get(id);
                }
                catch (e) {
                    reject(e);
                    return;
                }
                request.onerror = reject;
                request.onsuccess = ev => {
                    resolve(this.deserializeFn(ev.target.result));
                };
            });
        }, this);
        return Promise.all(promises);
    }
    put(rows) {
        if (rows.length === 0) {
            return Promise.resolve();
        }
        const promises = rows.map(row => {
            return this.performWriteOp(() => {
                return this.store.put(row.serialize());
            });
        }, this);
        return Promise.all(promises).then(() => {
            return;
        });
    }
    remove(ids, disableClearTableOptimization) {
        const deleteByIdsFn = () => {
            const promises = ids.map(id => this.performWriteOp(() => this.store.delete(id)));
            return Promise.all(promises).then(() => {
                return;
            });
        };
        if (disableClearTableOptimization) {
            return deleteByIdsFn();
        }
        return new Promise((resolve, reject) => {
            const request = this.store.count();
            request.onsuccess = ev => {
                if (ids.length === 0 ||
                    ev.target.result === ids.length) {
                    this.performWriteOp(() => this.store.clear()).then(resolve, reject);
                    return;
                }
                deleteByIdsFn().then(resolve, reject);
            };
            request.onerror = reject;
        });
    }
    getAllWithCursor() {
        return new Promise((resolve, reject) => {
            const rows = [];
            let request;
            try {
                request = this.store.openCursor();
            }
            catch (e) {
                reject(e);
                return;
            }
            request.onerror = reject;
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    rows.push(this.deserializeFn(cursor.value));
                    cursor.continue();
                }
                else {
                    resolve(rows);
                }
            };
        });
    }
    getAllBulk() {
        return new Promise((resolve, reject) => {
            let request;
            try {
                request = this.store.getAll();
            }
            catch (e) {
                reject(new Exception(ErrorCode.CANT_LOAD_IDB, e.name, e.message));
                return;
            }
            request.onerror = reject;
            request.onsuccess = () => {
                try {
                    const rows = request.result.map((rawRow) => this.deserializeFn(rawRow));
                    resolve(rows);
                }
                catch (e) {
                    reject(new Exception(ErrorCode.CANT_READ_IDB, e.name, e.message));
                }
            };
        });
    }
    performWriteOp(reqFactory) {
        return new Promise((resolve, reject) => {
            let request;
            try {
                request = reqFactory();
            }
            catch (e) {
                reject(e);
                return;
            }
            request.onsuccess = () => resolve();
            request.onerror = reject;
        });
    }
}
class IndexedDBTx extends BaseTx {
    constructor(global, tx, txType, bundleMode, journal) {
        super(txType, journal);
        this.global = global;
        this.tx = tx;
        this.bundleMode = bundleMode;
        this.tx.oncomplete = () => {
            this.resolver.resolve();
        };
        this.tx.onabort = (ev) => {
            this.resolver.reject(ev);
        };
    }
    getTable(tableName, deserializeFn, type) {
        if (this.bundleMode) {
            const tableType = type !== undefined && type !== null ? type : TableType.DATA;
            return BundledObjectStore.forTableType(this.global, this.tx.objectStore(tableName), deserializeFn, tableType);
        }
        else {
            return new ObjectStore(this.tx.objectStore(tableName), deserializeFn);
        }
    }
    abort() {
        this.tx.abort();
    }
    commitInternal() {
        return this.resolver.promise;
    }
}
class IndexedDB {
    constructor(global, schema) {
        this.global = global;
        this.schema = schema;
        this.bundledMode = this.schema.pragma().enableBundledMode || false;
    }
    init(upgrade) {
        const indexedDB = window.indexedDB;
        if (indexedDB === undefined || indexedDB === null) {
            throw new Exception(ErrorCode.IDB_NOT_PROVIDED);
        }
        const onUpgrade = upgrade || ((rawDb) => Promise.resolve());
        return new Promise((resolve, reject) => {
            let request;
            try {
                request = indexedDB.open(this.schema.name(), this.schema.version());
            }
            catch (e) {
                reject(e);
                return;
            }
            request.onerror = e => {
                const error = e.target
                    .error;
                reject(new Exception(ErrorCode.CANT_OPEN_IDB, error.name, error.message));
            };
            request.onupgradeneeded = ev => {
                this.onUpgradeNeeded(onUpgrade, ev).then(() => {
                    return;
                }, reject);
            };
            request.onsuccess = ev => {
                this.db = ev.target.result;
                this.scanRowId().then(rowId => {
                    Row.setNextIdIfGreater(rowId + 1);
                    resolve(this.db);
                });
            };
        });
    }
    createTx(type, scope, journal) {
        const nativeTx = this.db.transaction(this.getIndexedDBScope(scope), type === TransactionType.READ_ONLY ? 'readonly' : 'readwrite');
        return new IndexedDBTx(this.global, nativeTx, type, this.bundledMode, journal);
    }
    close() {
        this.db.close();
    }
    getTableInternal(tableName) {
        throw new Exception(ErrorCode.CANT_GET_IDB_TABLE);
    }
    subscribe(handler) {
    }
    unsubscribe(handler) {
    }
    notify(changes) {
    }
    supportsImport() {
        return true;
    }
    peek() {
        return this.db;
    }
    onUpgradeNeeded(onUpgrade, ev) {
        const db = ev.target.result;
        const tx = ev.target.transaction;
        const rawDb = new IndexedDBRawBackStore(ev.oldVersion, db, tx, this.bundledMode);
        this.removeIndexTables(db);
        this.createTables(db);
        return onUpgrade(rawDb);
    }
    removeIndexTables(db) {
        const storeNames = [];
        for (let i = 0; i < db.objectStoreNames.length; ++i) {
            const name = db.objectStoreNames.item(i);
            if (name.indexOf('.') !== -1) {
                storeNames.push(name);
            }
        }
        storeNames.forEach(store => {
            try {
                db.deleteObjectStore(store);
            }
            catch (e) {
            }
        });
    }
    createTables(db) {
        this.schema.tables().forEach(table => {
            this.createObjectStoresForTable(db, table);
        }, this);
    }
    createObjectStoresForTable(db, tableSchema) {
        if (!db.objectStoreNames.contains(tableSchema.getName())) {
            db.createObjectStore(tableSchema.getName(), { keyPath: 'id' });
        }
        if (tableSchema.persistentIndex()) {
            const tableIndices = tableSchema.getIndices();
            tableIndices.forEach(indexSchema => {
                this.createIndexTable(db, indexSchema.getNormalizedName());
            }, this);
            this.createIndexTable(db, tableSchema.getRowIdIndexName());
        }
    }
    createIndexTable(db, indexName) {
        if (!db.objectStoreNames.contains(indexName)) {
            db.createObjectStore(indexName, { keyPath: 'id' });
        }
    }
    getIndexedDBScope(scope) {
        const indexedDBScope = new Set();
        scope.forEach(tableSchema => {
            indexedDBScope.add(tableSchema.getName());
            if (tableSchema.persistentIndex()) {
                const tableIndices = tableSchema.getIndices();
                tableIndices.forEach(indexSchema => indexedDBScope.add(indexSchema.getNormalizedName()));
                indexedDBScope.add(tableSchema.getRowIdIndexName());
            }
        });
        return Array.from(indexedDBScope.values());
    }
    scanRowId(txIn) {
        const tableNames = this.schema.tables().map(table => table.getName());
        const db = this.db;
        let maxRowId = 0;
        const extractRowId = (cursor) => {
            if (this.bundledMode) {
                const page = Page.deserialize(cursor.value);
                return Object.keys(page.getPayload()).reduce((prev, cur) => {
                    return Math.max(prev, Number(cur));
                }, 0);
            }
            return cursor.key;
        };
        const scanTableRowId = (tableName) => {
            return new Promise((resolve, reject) => {
                let req;
                try {
                    const tx = txIn || db.transaction([tableName]);
                    req = tx.objectStore(tableName).openCursor(undefined, 'prev');
                }
                catch (e) {
                    reject(e);
                    return;
                }
                req.onsuccess = ev => {
                    const cursor = ev.target.result;
                    if (cursor) {
                        maxRowId = Math.max(maxRowId, extractRowId(cursor));
                    }
                    resolve(maxRowId);
                };
                req.onerror = () => resolve(maxRowId);
            });
        };
        const execSequentially = () => {
            if (tableNames.length === 0) {
                return Promise.resolve();
            }
            const tableName = tableNames.shift();
            return scanTableRowId(tableName).then(execSequentially);
        };
        return new Promise(resolve => {
            execSequentially().then(() => resolve(maxRowId));
        });
    }
}
class LocalStorageTable {
    constructor(tableKey) {
        this.key = tableKey;
        this.data = {};
        const rawData = window.localStorage.getItem(tableKey);
        if (rawData) {
            this.data = JSON.parse(rawData);
        }
    }
    get(ids) {
        let results;
        if (ids.length === 0) {
            results = Object.keys(this.data).map(key => {
                const id = Number(key);
                return new Row(id, this.data[key]);
            }, this);
        }
        else {
            results = [];
            ids.forEach(id => {
                if (Object.prototype.hasOwnProperty.call(this.data, id.toString())) {
                    results.push(new Row(id, this.data[id.toString()]));
                }
            }, this);
        }
        return Promise.resolve(results);
    }
    put(rows) {
        rows.forEach(row => {
            this.data[row.id().toString()] = row.payload();
        }, this);
        return Promise.resolve();
    }
    remove(ids, disableClearTableOptimization) {
        if (ids.length === 0 || ids.length === Object.keys(this.data).length) {
            this.data = {};
        }
        else {
            ids.forEach(id => delete this.data[id]);
        }
        return Promise.resolve();
    }
    commit() {
        window.localStorage.setItem(this.key, JSON.stringify(this.data));
    }
    diff(newData) {
        const oldIds = Object.keys(this.data);
        const newIds = Object.keys(newData);
        const diff = new TableDiff(this.key);
        newIds.forEach(id => {
            const rowId = Number(id);
            if (Object.prototype.hasOwnProperty.call(this.data, id)) {
                if (JSON.stringify(this.data[id]) !== JSON.stringify(newData[id])) {
                    diff.modify([
                        new Row(rowId, this.data[id]),
                        new Row(rowId, newData[id]),
                    ]);
                }
            }
            else {
                diff.add(new Row(rowId, newData[id]));
            }
        }, this);
        oldIds
            .filter(id => Object.prototype.hasOwnProperty.call(newData, id))
            .forEach(id => {
            diff.delete(new Row(Number(id), this.data[id]));
        }, this);
        return diff;
    }
}
class LocalStorage {
    constructor(dbSchema) {
        this.schema = dbSchema;
        this.tables = new Map();
        this.changeHandler = null;
        this.listener = null;
    }
    init(onUpgrade) {
        return new Promise(resolve => {
            this.initSync();
            resolve();
        });
    }
    createTx(type, scope, journal) {
        return new LocalStorageTx(this, type, journal);
    }
    close() {
    }
    getTableInternal(tableName) {
        if (!this.tables.has(tableName)) {
            throw new Exception(ErrorCode.TABLE_NOT_FOUND, tableName);
        }
        return this.tables.get(tableName);
    }
    subscribe(handler) {
        this.changeHandler = handler;
        if (this.listener) {
            return;
        }
        this.listener = this.onStorageEvent.bind(this);
        window.addEventListener('storage', this.listener, false);
    }
    unsubscribe(handler) {
        if (this.listener) {
            window.removeEventListener('storage', this.listener, false);
            this.listener = null;
            this.changeHandler = null;
        }
    }
    notify(changes) {
        if (this.changeHandler) {
            this.changeHandler(changes);
        }
    }
    supportsImport() {
        return false;
    }
    commit() {
        this.tables.forEach(table => table.commit());
    }
    initSync() {
        if (!window.localStorage) {
            throw new Exception(ErrorCode.LOCAL_STORAGE_NOT_PROVIDED);
        }
        const versionKey = `${this.schema.name()}.version#`;
        const version = window.localStorage.getItem(versionKey);
        if (version !== undefined && version !== null) {
            if (version !== this.schema.version().toString()) {
                throw new Exception(ErrorCode.NOT_IMPLEMENTED);
            }
            this.loadTables();
        }
        else {
            this.loadTables();
            window.localStorage.setItem(versionKey, this.schema.version().toString());
            this.commit();
        }
    }
    loadTables() {
        const prefix = this.schema.name() + '.';
        this.schema.tables().forEach(table => {
            const tableName = table.getName();
            this.tables.set(tableName, new LocalStorageTable(prefix + tableName));
            if (table.persistentIndex()) {
                const indices = table.getIndices();
                indices.forEach(index => {
                    const indexName = index.getNormalizedName();
                    this.tables.set(indexName, new LocalStorageTable(prefix + indexName));
                }, this);
            }
        }, this);
    }
    onStorageEvent(ev) {
        const key = ev.key;
        if (ev.storageArea !== window.localStorage ||
            key.indexOf(this.schema.name() + '.') !== 0) {
            return;
        }
        const newValue = window.localStorage.getItem(key);
        let newData = {};
        if (newValue !== null) {
            try {
                newData = JSON.parse(newValue);
            }
            catch (e) {
                return;
            }
        }
        const tableName = key.slice(this.schema.name().length + 1);
        const table = this.tables.get(tableName);
        if (table && this.changeHandler) {
            this.changeHandler([table.diff(newData)]);
        }
    }
}
class LocalStorageTx extends BaseTx {
    constructor(store, type, journal) {
        super(type, journal);
        this.store = store;
        if (type === TransactionType.READ_ONLY) {
            this.resolver.resolve();
        }
    }
    getTable(tableName, deserializeFn, tableType) {
        return this.store.getTableInternal(tableName);
    }
    abort() {
        this.resolver.reject();
    }
    commitInternal() {
        this.store.commit();
        this.resolver.resolve();
        return this.resolver.promise;
    }
}
class MemoryTable {
    constructor() {
        this.data = new Map();
    }
    getSync(ids) {
        if (ids.length === 0) {
            return Array.from(this.data.values());
        }
        const results = [];
        ids.forEach(id => {
            const row = this.data.get(id) || null;
            if (row !== null) {
                results.push(row);
            }
        }, this);
        return results;
    }
    getData() {
        return this.data;
    }
    get(ids) {
        return Promise.resolve(this.getSync(ids));
    }
    putSync(rows) {
        rows.forEach(row => this.data.set(row.id(), row));
    }
    put(rows) {
        this.putSync(rows);
        return Promise.resolve();
    }
    removeSync(ids) {
        if (ids.length === 0 || ids.length === this.data.size) {
            this.data.clear();
        }
        else {
            ids.forEach(id => this.data.delete(id));
        }
    }
    remove(ids) {
        this.removeSync(ids);
        return Promise.resolve();
    }
    getMaxRowId() {
        if (this.data.size === 0) {
            return 0;
        }
        return Array.from(this.data.keys()).reduce((prev, cur) => {
            return prev > cur ? prev : cur;
        }, 0);
    }
}
class Memory {
    constructor(schema) {
        this.schema = schema;
        this.tables = new Map();
    }
    init(onUpgrade) {
        this.schema.tables().forEach(table => this.initTable(table), this);
        return Promise.resolve();
    }
    getTableInternal(tableName) {
        const table = this.tables.get(tableName) || null;
        if (table === null) {
            throw new Exception(ErrorCode.TABLE_NOT_FOUND, tableName);
        }
        return table;
    }
    createTx(type, scope, journal) {
        return new MemoryTx(this, type, journal);
    }
    close() {
    }
    subscribe(handler) {
    }
    unsubscribe(handler) {
    }
    notify(changes) {
    }
    supportsImport() {
        return true;
    }
    peek() {
        return this.tables;
    }
    createTable(tableName) {
        if (!this.tables.has(tableName)) {
            this.tables.set(tableName, new MemoryTable());
        }
    }
    initTable(tableSchema) {
        this.createTable(tableSchema.getName());
        if (tableSchema.persistentIndex()) {
            tableSchema.getIndices().forEach(indexSchema => {
                this.createTable(indexSchema.getNormalizedName());
            }, this);
            this.createTable(tableSchema.getRowIdIndexName());
        }
    }
}
class MemoryTx extends BaseTx {
    constructor(store, type, journal) {
        super(type, journal);
        this.store = store;
        if (type === TransactionType.READ_ONLY) {
            this.resolver.resolve();
        }
    }
    getTable(tableName, deserializeFn, tableType) {
        return this.store.getTableInternal(tableName);
    }
    abort() {
        this.resolver.reject();
    }
    commitInternal() {
        this.resolver.resolve();
        return this.resolver.promise;
    }
}
class ObservableStore extends Memory {
    constructor(schema) {
        super(schema);
        this.observer = null;
    }
    subscribe(handler) {
        if (this.observer === null) {
            this.observer = handler;
        }
    }
    unsubscribe(handler) {
        this.observer = null;
    }
    notify(changes) {
        if (this.observer !== null) {
            this.observer(changes);
        }
    }
    supportsImport() {
        return false;
    }
}
class WebSqlTable {
    constructor(tx, name, deserializeFn) {
        this.tx = tx;
        this.deserializeFn = deserializeFn;
        this.name = `"${name}"`;
    }
    get(ids) {
        const where = ids.length === 0 ? '' : `WHERE id IN (${ids.join(',')})`;
        const sql = `SELECT id, value FROM ${this.name} ${where}`;
        const deserializeFn = this.deserializeFn;
        const transformer = (res) => {
            const results = res;
            const length = results.rows.length;
            const rows = new Array(length);
            for (let i = 0; i < length; ++i) {
                rows[i] = deserializeFn({
                    id: results.rows.item(i)['id'],
                    value: JSON.parse(results.rows.item(i)['value']),
                });
            }
            return rows;
        };
        return this.tx.queue(sql, [], transformer);
    }
    put(rows) {
        if (rows.length === 0) {
            return Promise.resolve();
        }
        const sql = `INSERT OR REPLACE INTO ${this.name} (id, value) VALUES (?, ?)`;
        rows.forEach(row => {
            this.tx.queue(sql, [row.id(), JSON.stringify(row.payload())]);
        }, this);
        return Promise.resolve();
    }
    remove(ids, disableClearTableOptimization) {
        const where = ids.length === 0 ? '' : `WHERE id IN (${ids.join(',')})`;
        const sql = `DELETE FROM ${this.name} ${where}`;
        this.tx.queue(sql, []);
        return Promise.resolve();
    }
}
class WebSqlTx extends BaseTx {
    static escapeTableName(tableName) {
        return tableName.replace('.', WebSqlTx.INDEX_MARK).replace('#', '__s__');
    }
    constructor(db, txType, journal) {
        super(txType, journal);
        this.db = db;
        this.tables = new Map();
        this.commands = [];
    }
    getTable(tableName, deserializeFn, tableType) {
        let table = this.tables.get(tableName) || null;
        if (table === null) {
            table = new WebSqlTable(this, WebSqlTx.escapeTableName(tableName), deserializeFn);
            this.tables.set(tableName, table);
        }
        return table;
    }
    queue(statement, params, transform) {
        const resolver = new Resolver();
        this.commands.push({
            params,
            resolver,
            statement,
            transform,
        });
        return resolver.promise;
    }
    abort() {
        this.commands = [];
    }
    commitInternal() {
        let lastCommand = null;
        const onTxError = this.resolver.reject.bind(this.resolver);
        const onExecError = (tx, e) => {
            this.resolver.reject(e);
            return false;
        };
        const results = [];
        const callback = (tx, res) => {
            if (lastCommand !== null) {
                let ret = res;
                if (lastCommand.transform && res !== null && res !== undefined) {
                    ret = lastCommand.transform(res);
                }
                results.push(ret);
                lastCommand.resolver.resolve(ret);
            }
            if (this.commands.length > 0) {
                const command = this.commands.shift();
                lastCommand = command;
                tx.executeSql(command.statement, command.params, callback, onExecError);
            }
            else {
                this.resolver.resolve(results);
            }
        };
        if (this.txType === TransactionType.READ_ONLY) {
            this.db.readTransaction(callback, onTxError);
        }
        else {
            this.db.transaction(callback, onTxError);
        }
        return this.resolver.promise;
    }
}
WebSqlTx.INDEX_MARK = '__d__';
class WebSqlRawBackStore {
    static queueListTables(tx) {
        const GET_TABLE_NAMES = 'SELECT tbl_name FROM sqlite_master WHERE type="table"';
        tx.queue(GET_TABLE_NAMES, [], (results) => {
            const rows = results['rows'];
            const tableNames = new Array(rows.length);
            for (let i = 0; i < tableNames.length; ++i) {
                tableNames[i] = rows.item(i)['tbl_name'];
            }
            return tableNames;
        });
    }
    constructor(global, version, db) {
        this.global = global;
        this.version = version;
        this.db = db;
    }
    getRawDBInstance() {
        return this.db;
    }
    getRawTransaction() {
        throw new Exception(ErrorCode.NO_WEBSQL_TX);
    }
    dropTable(tableName) {
        const tx = this.createTx();
        tx.queue(`DROP TABLE ${tableName}`, []);
        return tx.commit();
    }
    addTableColumn(tableName, columnName, defaultValue) {
        const value = IndexedDBRawBackStore.convert(defaultValue);
        return this.transformColumn(tableName, row => {
            row.value[columnName] = value;
            return row;
        });
    }
    dropTableColumn(tableName, columnName) {
        return this.transformColumn(tableName, row => {
            delete row.value[columnName];
            return row;
        });
    }
    renameTableColumn(tableName, oldColumnName, newColumnName) {
        return this.transformColumn(tableName, row => {
            row.value[newColumnName] = row.value[oldColumnName];
            delete row.value[oldColumnName];
            return row;
        });
    }
    createRow(payload) {
        const data = {};
        Object.keys(payload).forEach(key => {
            data[key] = IndexedDBRawBackStore.convert(payload[key]);
        });
        return Row.create(data);
    }
    getVersion() {
        return this.version;
    }
    dump() {
        const resolver = new Resolver();
        const tx = this.createTx();
        WebSqlRawBackStore.queueListTables(tx);
        const ret = {};
        tx.commit().then(res => {
            const results = res;
            const tables = results[0].filter((name) => {
                return name !== '__lf_ver' && name !== '__WebKitDatabaseInfoTable__';
            });
            const promises = tables.map(tableName => {
                return this.dumpTable(tableName).then(rows => (ret[tableName] = rows));
            }, this);
            Promise.all(promises).then(() => resolver.resolve(ret));
        });
        return resolver.promise;
    }
    createTx() {
        return new WebSqlTx(this.db, TransactionType.READ_WRITE, new Journal(this.global, new Set()));
    }
    dumpTable(tableName) {
        const tx = this.createTx();
        tx.queue(`SELECT id, value FROM ${tableName}`, []);
        return tx.commit().then(res => {
            const results = res;
            const length = results[0].rows.length;
            const rows = new Array(length);
            for (let i = 0; i < length; ++i) {
                rows[i] = {
                    id: results[0].rows.item(i)['id'],
                    value: JSON.parse(results[0].rows.item(i)['value']),
                };
            }
            return Promise.resolve(rows);
        });
    }
    transformColumn(tableName, transformer) {
        const tx = this.createTx();
        const sql = `UPDATE ${tableName} SET value=? WHERE id=?`;
        return this.dumpTable(tableName).then(rows => {
            rows.forEach(row => {
                const newRow = transformer(row);
                tx.queue(sql, [JSON.stringify(newRow.value), newRow.id]);
            });
            return tx.commit();
        });
    }
}
class WebSql {
    static escape(tableName) {
        return `"${tableName}"`;
    }
    constructor(global, schema, size) {
        this.global = global;
        this.schema = schema;
        this.size = size || 1;
    }
    init(upgrade) {
        if (!window.openDatabase) {
            throw new Exception(ErrorCode.WEBSQL_NOT_PROVIDED);
        }
        const defaultUpgrade = (rawDb) => Promise.resolve();
        const onUpgrade = upgrade || defaultUpgrade;
        return new Promise((resolve, reject) => {
            const db = window.openDatabase(this.schema.name(), '', this.schema.name(), this.size);
            if (db) {
                this.db = db;
                this.checkVersion(onUpgrade).then(() => {
                    this.scanRowId().then(resolve, reject);
                }, e => {
                    if (e instanceof Exception) {
                        throw e;
                    }
                    throw new Exception(ErrorCode.CANT_OPEN_WEBSQL_DB, e.message);
                });
            }
            else {
                throw new Exception(ErrorCode.CANT_OPEN_WEBSQL_DB);
            }
        });
    }
    initialized() {
        return this.db !== undefined && this.db !== null;
    }
    createTx(type, scope, journal) {
        if (this.db) {
            return new WebSqlTx(this.db, type, journal);
        }
        throw new Exception(ErrorCode.CONNECTION_CLOSED);
    }
    close() {
    }
    getTableInternal(tableName) {
        throw new Exception(ErrorCode.CANT_GET_WEBSQL_TABLE);
    }
    subscribe(handler) {
        this.notSupported();
    }
    unsubscribe(handler) {
        this.notSupported();
    }
    notify(changes) {
        this.notSupported();
    }
    supportsImport() {
        return true;
    }
    getEmptyJournal() {
        return new Journal(this.global, new Set());
    }
    checkVersion(onUpgrade) {
        const CREATE_VERSION = 'CREATE TABLE IF NOT EXISTS __lf_ver(' +
            'id INTEGER PRIMARY KEY, v INTEGER)';
        const GET_VERSION = 'SELECT v FROM __lf_ver WHERE id = 0';
        const resolver = new Resolver();
        const tx = new WebSqlTx(this.db, TransactionType.READ_WRITE, this.getEmptyJournal());
        tx.queue(CREATE_VERSION, []);
        tx.queue(GET_VERSION, []);
        tx.commit().then((res) => {
            const results = res;
            let version = 0;
            if (results[1].rows.length) {
                version = results[1].rows.item(0)['v'];
            }
            if (version < this.schema.version()) {
                this.onUpgrade(onUpgrade, version).then(resolver.resolve.bind(resolver));
            }
            else if (version > this.schema.version()) {
                resolver.reject(new Exception(ErrorCode.INCOMPATIBLE_DB));
            }
            else {
                resolver.resolve();
            }
        }, resolver.reject.bind(resolver));
        return resolver.promise;
    }
    notSupported() {
        throw new Exception(ErrorCode.NO_CHANGE_NOTIFICATION);
    }
    onUpgrade(upgrade, oldVersion) {
        return this.preUpgrade().then(() => {
            const rawDb = new WebSqlRawBackStore(this.global, oldVersion, this.db);
            return upgrade(rawDb);
        });
    }
    preUpgrade() {
        const tables = this.schema.tables();
        const tx = new WebSqlTx(this.db, TransactionType.READ_WRITE, this.getEmptyJournal());
        const tx2 = new WebSqlTx(this.db, TransactionType.READ_WRITE, this.getEmptyJournal());
        tx.queue('INSERT OR REPLACE INTO __lf_ver VALUES (0, ?)', [
            this.schema.version(),
        ]);
        WebSqlRawBackStore.queueListTables(tx);
        return tx.commit().then(res => {
            const results = res;
            const existingTables = results[1];
            existingTables
                .filter(name => name.indexOf(WebSqlTx.INDEX_MARK) !== -1)
                .forEach(name => tx2.queue('DROP TABLE ' + WebSql.escape(name), []));
            const newTables = [];
            const persistentIndices = [];
            const rowIdIndices = [];
            tables.map(table => {
                if (existingTables.indexOf(table.getName()) === -1) {
                    newTables.push(table.getName());
                }
                if (table.persistentIndex()) {
                    table.getIndices().forEach(index => {
                        const idxTableName = WebSqlTx.escapeTableName(index.getNormalizedName());
                        newTables.push(idxTableName);
                        persistentIndices.push(idxTableName);
                    });
                    const rowIdTableName = WebSqlTx.escapeTableName(table.getRowIdIndexName());
                    newTables.push(rowIdTableName);
                    rowIdIndices.push(rowIdTableName);
                }
            });
            newTables.forEach(name => {
                tx2.queue(`CREATE TABLE ${WebSql.escape(name)}` +
                    '(id INTEGER PRIMARY KEY, value TEXT)', []);
            });
            return tx2.commit();
        });
    }
    scanRowId() {
        let maxRowId = 0;
        const resolver = new Resolver();
        const selectIdFromTable = (tableName) => {
            const tx = new WebSqlTx(this.db, TransactionType.READ_ONLY);
            tx.queue(`SELECT MAX(id) FROM ${WebSql.escape(tableName)}`, []);
            return tx.commit().then(res => {
                const results = res;
                const id = results[0].rows.item(0)['MAX(id)'];
                maxRowId = Math.max(id, maxRowId);
            });
        };
        const promises = this.schema
            .tables()
            .map(table => selectIdFromTable(table.getName()));
        Promise.all(promises).then(() => {
            Row.setNextIdIfGreater(maxRowId + 1);
            resolver.resolve();
        }, e => {
            resolver.reject(e);
        });
        return resolver.promise;
    }
}
class Inspector {
    static inspect(dbName, tableName, limit, skip) {
        if (dbName === null) {
            return Inspector.listDb();
        }
        if (tableName === null) {
            return Inspector.listTables(dbName);
        }
        return Inspector.inspectTable(dbName, tableName, limit, skip);
    }
    static toString(data) {
        let value = '';
        try {
            value = JSON.stringify(data);
        }
        catch (e) {
        }
        return value;
    }
    static getGlobal(dbName) {
        const global = Global.get();
        const ns = new ServiceId(`ns_${dbName}`);
        return global.isRegistered(ns) ? global.getService(ns) : null;
    }
    static listDb() {
        const global = Global.get();
        const dbList = {};
        global.listServices().forEach(service => {
            if (service.substring(0, 3) === 'ns_') {
                const dbName = service.substring(3);
                dbList[dbName] = Inspector.getGlobal(dbName)
                    .getService(Service.SCHEMA)
                    .version();
            }
        });
        return Inspector.toString(dbList);
    }
    static listTables(dbName) {
        const global = Inspector.getGlobal(dbName);
        const tables = {};
        if (global !== undefined && global !== null) {
            const indexStore = global.getService(Service.INDEX_STORE);
            global
                .getService(Service.SCHEMA)
                .tables()
                .forEach(t => {
                const table = t;
                tables[table.getName()] = indexStore.get(table.getRowIdIndexName()).stats().totalRows;
            });
        }
        return Inspector.toString(tables);
    }
    static inspectTable(dbName, tableName, limit, skip) {
        const global = Inspector.getGlobal(dbName);
        let contents = [];
        if (global !== undefined && global !== null) {
            let table = null;
            try {
                table = global.getService(Service.SCHEMA).table(tableName);
            }
            catch (e) {
            }
            if (table !== undefined && table !== null) {
                const indexStore = global.getService(Service.INDEX_STORE);
                const cache = global.getService(Service.CACHE);
                const rowIds = indexStore.get(table.getRowIdIndexName()).getRange(undefined, false, limit, skip);
                if (rowIds.length) {
                    contents = cache.getMany(rowIds).map(row => row.payload());
                }
            }
        }
        return Inspector.toString(contents);
    }
}
class DefaultCache {
    constructor(dbSchema) {
        this.map = new Map();
        this.tableRows = new Map();
        dbSchema.tables().forEach(table => {
            this.tableRows.set(table.getName(), new Set());
        }, this);
    }
    set(tableName, row) {
        this.map.set(row.id(), row);
        this.getTableRowSet(tableName).add(row.id());
    }
    setMany(tableName, rows) {
        const tableSet = this.getTableRowSet(tableName);
        rows.forEach(row => {
            this.map.set(row.id(), row);
            tableSet.add(row.id());
        }, this);
    }
    get(id) {
        return this.map.get(id) || null;
    }
    getMany(ids) {
        return ids.map(id => this.get(id));
    }
    getRange(tableName, fromId, toId) {
        const data = [];
        const min = Math.min(fromId, toId);
        const max = Math.max(fromId, toId);
        const tableSet = this.getTableRowSet(tableName);
        if (tableSet.size < max - min) {
            tableSet.forEach(key => {
                if (key >= min && key <= max) {
                    const value = this.map.get(key);
                    assert(value !== null && value !== undefined, 'Inconsistent cache 1');
                    data.push(value);
                }
            }, this);
        }
        else {
            for (let i = min; i <= max; ++i) {
                if (!tableSet.has(i)) {
                    continue;
                }
                const value = this.map.get(i);
                assert(value !== null && value !== undefined, 'Inconsistent cache 2');
                data.push(value);
            }
        }
        return data;
    }
    remove(tableName, id) {
        this.map.delete(id);
        this.getTableRowSet(tableName).delete(id);
    }
    removeMany(tableName, ids) {
        const tableSet = this.getTableRowSet(tableName);
        ids.forEach(id => {
            this.map.delete(id);
            tableSet.delete(id);
        }, this);
    }
    getCount(tableName) {
        return tableName ? this.getTableRowSet(tableName).size : this.map.size;
    }
    clear() {
        this.map.clear();
        this.tableRows.clear();
    }
    getTableRowSet(tableName) {
        const ret = this.tableRows.get(tableName);
        return ret;
    }
}
class IndexHelper {
    static hashCode(value) {
        let hash = 0;
        for (let i = 0; i < value.length; ++i) {
            hash = (hash << 5) - hash + value.charCodeAt(i);
            hash = hash & hash;
        }
        return hash;
    }
    static hashArray(values) {
        const keys = values.map(value => {
            return value !== undefined && value !== null
                ? IndexHelper.hashCode(value.toString()).toString(32)
                : '';
        });
        return keys.join('_');
    }
    static slice(rawArray, reverseOrder, limit, skip) {
        const array = reverseOrder ? rawArray.reverse() : rawArray;
        if ((limit === undefined || limit === null) &&
            (skip === undefined || skip === null)) {
            return array;
        }
        const actualLimit = Math.min(limit !== undefined ? limit : array.length, array.length);
        if (actualLimit === 0) {
            return [];
        }
        const actualSkip = Math.min(skip || 0, array.length);
        return array.slice(actualSkip, actualSkip + actualLimit);
    }
}
class BTree {
    static deserialize(comparator, name, uniqueKeyOnly, rows) {
        const tree = new BTree(name, comparator, uniqueKeyOnly);
        const newRoot = BTreeNode.deserialize(rows, tree);
        tree.root = newRoot;
        return tree;
    }
    constructor(name, comparatorObj, uniqueKeyOnly, data) {
        this.name = name;
        this.comparatorObj = comparatorObj;
        this.uniqueKeyOnly = uniqueKeyOnly;
        this.root = undefined;
        this.statsObj = new IndexStats();
        if (data) {
            this.root = BTreeNode.fromData(this, data);
        }
        else {
            this.clear();
        }
    }
    getName() {
        return this.name;
    }
    toString() {
        return this.root.toString();
    }
    add(key, value) {
        this.root = this.root.insert(key, value);
    }
    set(key, value) {
        this.root = this.root.insert(key, value, true);
    }
    remove(key, rowId) {
        this.root = this.root.remove(key, rowId);
    }
    get(key) {
        return this.root.get(key);
    }
    cost(keyRange) {
        if (keyRange === undefined || keyRange === null) {
            return this.stats().totalRows;
        }
        if (keyRange instanceof SingleKeyRange) {
            if (keyRange.isAll()) {
                return this.stats().totalRows;
            }
            if (keyRange.isOnly()) {
                return this.get(keyRange.from).length;
            }
        }
        return this.getRange([keyRange]).length;
    }
    stats() {
        return this.statsObj;
    }
    getRange(keyRanges, reverseOrder, rawLimit, rawSkip) {
        const leftMostKey = this.root.getLeftMostNode().keys[0];
        if (leftMostKey === undefined || rawLimit === 0) {
            return BTree.EMPTY;
        }
        const reverse = reverseOrder || false;
        const limit = rawLimit !== undefined && rawLimit !== null
            ? Math.min(rawLimit, this.stats().totalRows)
            : this.stats().totalRows;
        const skip = rawSkip || 0;
        const maxCount = Math.min(Math.max(this.stats().totalRows - skip, 0), limit);
        if (maxCount === 0) {
            return BTree.EMPTY;
        }
        if (keyRanges === undefined ||
            (keyRanges.length === 1 &&
                keyRanges[0] instanceof SingleKeyRange &&
                keyRanges[0].isAll())) {
            return this.getAll(maxCount, reverse, limit, skip);
        }
        const sortedKeyRanges = this.comparator().sortKeyRanges(keyRanges);
        const results = new Array(reverse ? this.stats().totalRows : maxCount);
        const params = {
            count: 0,
            limit: results.length,
            reverse,
            skip,
        };
        const useFilter = this.comparator().keyDimensions() > 1;
        sortedKeyRanges.forEach(range => {
            const keys = this.comparator().rangeToKeys(range);
            const key = this.comparator().isLeftOpen(range) ? leftMostKey : keys[0];
            let start = this.root.getContainingLeaf(key);
            let strikeCount = 0;
            while (start !== undefined &&
                start !== null &&
                params.count < params.limit) {
                if (useFilter) {
                    start.getRangeWithFilter(range, params, results);
                }
                else {
                    start.getRange(range, params, results);
                }
                if (params.skip === 0 &&
                    !start.isFirstKeyInRange(range)) {
                    strikeCount++;
                }
                else {
                    strikeCount = 0;
                }
                start = strikeCount === 2 ? null : start.next;
            }
        }, this);
        if (results.length > params.count) {
            results.splice(params.count, results.length - params.count);
        }
        return reverse ? IndexHelper.slice(results, reverse, limit, skip) : results;
    }
    clear() {
        this.root = BTreeNode.create(this);
        this.stats().clear();
    }
    containsKey(key) {
        return this.root.containsKey(key);
    }
    min() {
        return this.minMax(this.comparatorObj.min.bind(this.comparatorObj));
    }
    max() {
        return this.minMax(this.comparatorObj.max.bind(this.comparatorObj));
    }
    isUniqueKey() {
        return this.uniqueKeyOnly;
    }
    comparator() {
        return this.comparatorObj;
    }
    eq(lhs, rhs) {
        if (lhs !== undefined && lhs !== null) {
            return this.comparator().compare(lhs, rhs) === Favor.TIE;
        }
        return false;
    }
    serialize() {
        return BTreeNode.serialize(this.root.getLeftMostNode());
    }
    getAll(maxCount, reverse, limit, skip) {
        const off = reverse ? this.stats().totalRows - maxCount - skip : skip;
        const results = new Array(maxCount);
        const params = {
            count: maxCount,
            offset: off,
            startIndex: 0,
        };
        this.root.fill(params, results);
        return reverse ? results.reverse() : results;
    }
    checkNullKey(node, index) {
        if (!this.comparator().comparable(node.keys[index])) {
            if (Array.isArray(node.keys[index])) {
                if (node.keys[index][0] === null) {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        return [
            node.keys[index],
            this.uniqueKeyOnly ? [node.values[index]] : node.values[index],
        ];
    }
    findLeftMost() {
        let node = this.root.getLeftMostNode();
        let index = 0;
        do {
            if (index >= node.keys.length) {
                node = node.next;
                index = 0;
                continue;
            }
            const results = this.checkNullKey(node, index);
            if (results !== null) {
                return results;
            }
            index++;
        } while (node !== null);
        return null;
    }
    findRightMost() {
        let node = this.root.getRightMostNode();
        let index = node.keys.length - 1;
        do {
            if (index < 0) {
                node = node.prev;
                index = 0;
                continue;
            }
            const results = this.checkNullKey(node, index);
            if (results !== null) {
                return results;
            }
            index--;
        } while (node !== null);
        return null;
    }
    minMax(compareFn) {
        const leftMost = this.findLeftMost();
        const rightMost = this.findRightMost();
        if (leftMost === null || rightMost === null) {
            return null;
        }
        return compareFn(leftMost[0], rightMost[0]) === Favor.LHS
            ? leftMost
            : rightMost;
    }
}
BTree.EMPTY = [];
class BTreeNode {
    static create(tree) {
        return new BTreeNode(Row.getNextId(), tree);
    }
    static serialize(start) {
        const rows = [];
        let node = start;
        while (node) {
            const payload = {
                k: node.keys,
                v: node.values,
            };
            rows.push(new Row(node.id, payload));
            node = node.next;
        }
        return rows;
    }
    static deserialize(rows, tree) {
        const stats = tree.stats();
        const leaves = rows.map(row => {
            const node = new BTreeNode(row.id(), tree);
            node.keys = row.payload()['k'];
            node.values = row.payload()['v'];
            node.keys.forEach((key, index) => {
                stats.add(key, tree.isUniqueKey() ? 1 : node.values[index].length);
            });
            return node;
        });
        for (let i = 0; i < leaves.length - 1; ++i) {
            BTreeNode.associate(leaves[i], leaves[i + 1]);
        }
        return leaves.length > 1 ? BTreeNode.createInternals(leaves[0]) : leaves[0];
    }
    static fromData(tree, data) {
        let max = BTreeNode.MAX_KEY_LEN;
        max = max * max * max;
        if (data.length >= max) {
            throw new Exception(ErrorCode.TOO_MANY_ROWS, max.toString());
        }
        let node = BTreeNode.createLeaves(tree, data);
        node = BTreeNode.createInternals(node);
        return node;
    }
    static dumpLevel(node) {
        let key = `${node.id}[${node.keys.join('|')}]`;
        const children = node.children.map(n => n.id).join('|');
        const values = node.values.join('/');
        const getNodeId = (n) => {
            return n !== null && n !== undefined ? n.id.toString() : '_';
        };
        let contents = getNodeId(node.prev) + '{';
        contents += node.isLeaf() ? values : children;
        contents = contents + '}' + getNodeId(node.parent);
        if (node.next) {
            const next = BTreeNode.dumpLevel(node.next);
            key = key + '  ' + next[0];
            contents = contents + '  ' + next[1];
        }
        return [key, contents];
    }
    static associate(left, right) {
        if (right) {
            right.prev = left;
        }
        if (left) {
            left.next = right;
        }
    }
    static calcNodeLen(remaining) {
        const maxLen = BTreeNode.MAX_KEY_LEN;
        const minLen = BTreeNode.MIN_KEY_LEN + 1;
        return remaining >= maxLen + minLen
            ? maxLen
            : remaining >= minLen && remaining <= maxLen
                ? remaining
                : minLen;
    }
    static createLeaves(tree, data) {
        let remaining = data.length;
        let dataIndex = 0;
        let curNode = BTreeNode.create(tree);
        const node = curNode;
        while (remaining > 0) {
            const nodeLen = BTreeNode.calcNodeLen(remaining);
            const target = data.slice(dataIndex, dataIndex + nodeLen);
            curNode.keys = target.map(e => e.key);
            curNode.values = target.map(e => e.value);
            dataIndex += nodeLen;
            remaining -= nodeLen;
            if (remaining > 0) {
                const newNode = BTreeNode.create(curNode.tree);
                BTreeNode.associate(curNode, newNode);
                curNode = newNode;
            }
        }
        return node;
    }
    static createParent(nodes) {
        const node = nodes[0];
        const root = BTreeNode.create(node.tree);
        root.height = node.height + 1;
        root.children = nodes;
        nodes.forEach((n, i) => {
            n.parent = root;
            if (i > 0) {
                root.keys.push(n.keys[0]);
            }
        });
        return root;
    }
    static createInternals(node) {
        let curNode = node;
        const data = [];
        do {
            data.push(curNode);
            curNode = curNode.next;
        } while (curNode);
        let root;
        if (data.length <= BTreeNode.MAX_KEY_LEN + 1) {
            root = BTreeNode.createParent(data);
        }
        else {
            let remaining = data.length;
            let dataIndex = 0;
            root = BTreeNode.create(node.tree);
            root.height = node.height + 2;
            while (remaining > 0) {
                const nodeLen = BTreeNode.calcNodeLen(remaining);
                const target = data.slice(dataIndex, dataIndex + nodeLen);
                const newNode = BTreeNode.createParent(target);
                newNode.parent = root;
                if (root.children.length) {
                    root.keys.push(target[0].keys[0]);
                    BTreeNode.associate(root.children[root.children.length - 1], newNode);
                }
                root.children.push(newNode);
                dataIndex += nodeLen;
                remaining -= nodeLen;
            }
        }
        return root;
    }
    static leftMostKey(node) {
        return node.isLeaf()
            ? node.keys[0]
            : BTreeNode.leftMostKey(node.children[0]);
    }
    constructor(id, tree) {
        this.id = id;
        this.tree = tree;
        this.height = 0;
        this.parent = null;
        this.prev = null;
        this.next = null;
        this.keys = [];
        this.values = [];
        this.children = [];
        this.getContainingLeaf =
            tree.comparator().keyDimensions() === 1
                ? this.getContainingLeafSingleKey
                : this.getContainingLeafMultiKey;
    }
    toString() {
        let result = '';
        const level = BTreeNode.dumpLevel(this);
        result += level[0] + '\n' + level[1] + '\n';
        if (this.children.length) {
            result += this.children[0].toString();
        }
        return result;
    }
    getLeftMostNode() {
        return this.isLeaf() ? this : this.children[0].getLeftMostNode();
    }
    getRightMostNode() {
        return this.isLeaf()
            ? this
            : this.children[this.children.length - 1].getRightMostNode();
    }
    get(key) {
        let pos = this.searchKey(key);
        if (this.isLeaf()) {
            let results = BTree.EMPTY;
            if (this.tree.eq(this.keys[pos], key)) {
                results = results.concat(this.values[pos]);
            }
            return results;
        }
        else {
            pos = this.tree.eq(this.keys[pos], key) ? pos + 1 : pos;
            return this.children[pos].get(key);
        }
    }
    containsKey(key) {
        const pos = this.searchKey(key);
        if (this.tree.eq(this.keys[pos], key)) {
            return true;
        }
        return this.isLeaf() ? false : this.children[pos].containsKey(key);
    }
    remove(key, value) {
        this.delete(key, -1, value);
        if (this.isRoot()) {
            let root = this;
            if (this.children.length === 1) {
                root = this.children[0];
                root.parent = null;
            }
            return root;
        }
        return this;
    }
    insert(key, value, replace = false) {
        let pos = this.searchKey(key);
        if (this.isLeaf()) {
            if (this.tree.eq(this.keys[pos], key)) {
                if (replace) {
                    this.tree
                        .stats()
                        .remove(key, this.tree.isUniqueKey()
                        ? 1
                        : this.values[pos].length);
                    this.values[pos] = this.tree.isUniqueKey() ? value : [value];
                }
                else if (this.tree.isUniqueKey()) {
                    throw new Exception(ErrorCode.DUPLICATE_KEYS, this.tree.getName(), JSON.stringify(key));
                }
                else {
                    if (!ArrayHelper.binaryInsert(this.values[pos], value)) {
                        throw new Exception(ErrorCode.ROW_ID_EXISTED);
                    }
                }
                this.tree.stats().add(key, 1);
                return this;
            }
            this.keys.splice(pos, 0, key);
            this.values.splice(pos, 0, this.tree.isUniqueKey() ? value : [value]);
            this.tree.stats().add(key, 1);
            return this.keys.length === BTreeNode.MAX_COUNT ? this.splitLeaf() : this;
        }
        else {
            pos = this.tree.eq(this.keys[pos], key) ? pos + 1 : pos;
            const node = this.children[pos].insert(key, value, replace);
            if (!node.isLeaf() && node.keys.length === 1) {
                this.keys.splice(pos, 0, node.keys[0]);
                node.children[1].parent = this;
                node.children[0].parent = this;
                this.children.splice(pos, 1, node.children[1]);
                this.children.splice(pos, 0, node.children[0]);
            }
            return this.keys.length === BTreeNode.MAX_COUNT
                ? this.splitInternal()
                : this;
        }
    }
    getRange(keyRange, params, results) {
        const c = this.tree.comparator();
        let left = 0;
        let right = this.keys.length - 1;
        const compare = (coverage) => {
            return coverage[0] ? (coverage[1] ? Favor.TIE : Favor.LHS) : Favor.RHS;
        };
        const keys = this.keys;
        const favorLeft = compare(c.compareRange(keys[left], keyRange));
        const favorRight = compare(c.compareRange(keys[right], keyRange));
        if (favorLeft === Favor.LHS ||
            (favorLeft === Favor.RHS && favorRight === Favor.RHS)) {
            return;
        }
        const getMidPoint = (l, r) => {
            const mid = (l + r) >> 1;
            return mid === l ? mid + 1 : mid;
        };
        const findFirstKey = (l, r, favorR) => {
            if (l >= r) {
                return favorR === Favor.TIE ? r : -1;
            }
            const favorL = compare(c.compareRange(keys[l], keyRange));
            if (favorL === Favor.TIE) {
                return l;
            }
            else if (favorL === Favor.LHS) {
                return -1;
            }
            const mid = getMidPoint(l, r);
            if (mid === r) {
                return favorR === Favor.TIE ? r : -1;
            }
            const favorM = compare(c.compareRange(keys[mid], keyRange));
            if (favorM === Favor.TIE) {
                return findFirstKey(l, mid, favorM);
            }
            else if (favorM === Favor.RHS) {
                return findFirstKey(mid + 1, r, favorR);
            }
            else {
                return findFirstKey(l + 1, mid, favorM);
            }
        };
        const findLastKey = (l, r) => {
            if (l >= r) {
                return l;
            }
            const favorR = compare(c.compareRange(keys[r], keyRange));
            if (favorR === Favor.TIE) {
                return r;
            }
            else if (favorR === Favor.RHS) {
                return l;
            }
            const mid = getMidPoint(l, r);
            if (mid === r) {
                return l;
            }
            const favorM = compare(c.compareRange(keys[mid], keyRange));
            if (favorM === Favor.TIE) {
                return findLastKey(mid, r);
            }
            else if (favorM === Favor.LHS) {
                return findLastKey(l, mid - 1);
            }
            else {
                return -1;
            }
        };
        if (favorLeft !== Favor.TIE) {
            left = findFirstKey(left + 1, right, favorRight);
        }
        if (left !== -1) {
            right = findLastKey(left, right);
            if (right !== -1 && right >= left) {
                this.appendResults(params, results, left, right + 1);
            }
        }
    }
    getRangeWithFilter(keyRange, params, results) {
        const c = this.tree.comparator();
        let start = -1;
        for (let i = 0; i < this.keys.length; ++i) {
            if (c.isInRange(this.keys[i], keyRange)) {
                start = i;
                break;
            }
        }
        if (start === -1) {
            return;
        }
        for (let i = start; i < this.keys.length && params.count < params.limit; ++i) {
            if (!c.isInRange(this.keys[i], keyRange)) {
                continue;
            }
            this.appendResultsAt(params, results, i);
        }
    }
    fill(params, results) {
        if (this.isLeaf()) {
            for (let i = 0; i < this.values.length && params.count > 0; ++i) {
                const val = this.values[i];
                if (params.offset > 0) {
                    params.offset -= !this.tree.isUniqueKey() ? val.length : 1;
                    if (params.offset < 0) {
                        for (let j = val.length + params.offset; j < val.length && params.count > 0; ++j) {
                            results[params.startIndex++] = val[j];
                            params.count--;
                        }
                    }
                    continue;
                }
                if (this.tree.isUniqueKey()) {
                    results[params.startIndex++] = this.values[i];
                    params.count--;
                }
                else {
                    for (let j = 0; j < val.length && params.count > 0; ++j) {
                        results[params.startIndex++] = val[j];
                        params.count--;
                    }
                }
            }
        }
        else {
            for (let i = 0; i < this.children.length && params.count > 0; ++i) {
                this.children[i].fill(params, results);
            }
        }
    }
    isFirstKeyInRange(range) {
        return this.tree.comparator().isFirstKeyInRange(this.keys[0], range);
    }
    isLeaf() {
        return this.height === 0;
    }
    isRoot() {
        return this.parent === null;
    }
    fix() {
        this.keys = [];
        for (let i = 1; i < this.children.length; ++i) {
            this.keys.push(BTreeNode.leftMostKey(this.children[i]));
        }
    }
    delete(key, parentPos, value) {
        const pos = this.searchKey(key);
        const isLeaf = this.isLeaf();
        if (!isLeaf) {
            const index = this.tree.eq(this.keys[pos], key) ? pos + 1 : pos;
            if (this.children[index].delete(key, index, value)) {
                this.fix();
            }
            else {
                return false;
            }
        }
        else if (!this.tree.eq(this.keys[pos], key)) {
            return false;
        }
        if (this.keys.length > pos && this.tree.eq(this.keys[pos], key)) {
            if (value !== undefined && !this.tree.isUniqueKey() && isLeaf) {
                if (ArrayHelper.binaryRemove(this.values[pos], value)) {
                    this.tree.stats().remove(key, 1);
                }
                const len = this.values[pos].length;
                if (len) {
                    return false;
                }
            }
            this.keys.splice(pos, 1);
            if (isLeaf) {
                const removedLength = this.tree.isUniqueKey()
                    ? 1
                    : this.values[pos].length;
                this.values.splice(pos, 1);
                this.tree.stats().remove(key, removedLength);
            }
        }
        if (this.keys.length < BTreeNode.MIN_KEY_LEN && !this.isRoot()) {
            if (!this.steal()) {
                this.merge(parentPos);
            }
            return true;
        }
        return true;
    }
    steal() {
        let from = null;
        let fromIndex;
        let fromChildIndex;
        let toIndex;
        if (this.next && this.next.keys.length > BTreeNode.MIN_KEY_LEN) {
            from = this.next;
            fromIndex = 0;
            fromChildIndex = 0;
            toIndex = this.keys.length + 1;
        }
        else if (this.prev && this.prev.keys.length > BTreeNode.MIN_KEY_LEN) {
            from = this.prev;
            fromIndex = this.prev.keys.length - 1;
            fromChildIndex = this.isLeaf() ? fromIndex : fromIndex + 1;
            toIndex = 0;
        }
        else {
            return false;
        }
        this.keys.splice(toIndex, 0, from.keys[fromIndex]);
        from.keys.splice(fromIndex, 1);
        const child = this.isLeaf() ? this.values : this.children;
        let fromChild = null;
        if (this.isLeaf()) {
            fromChild = from.values;
        }
        else {
            fromChild = from.children;
            fromChild[fromChildIndex].parent = this;
        }
        child.splice(toIndex, 0, fromChild[fromChildIndex]);
        fromChild.splice(fromChildIndex, 1);
        if (!from.isLeaf()) {
            from.fix();
            this.fix();
        }
        return true;
    }
    merge(parentPos) {
        let mergeTo;
        let keyOffset;
        let childOffset;
        if (this.next && this.next.keys.length < BTreeNode.MAX_KEY_LEN) {
            mergeTo = this.next;
            keyOffset = 0;
            childOffset = 0;
        }
        else if (this.prev) {
            mergeTo = this.prev;
            keyOffset = mergeTo.keys.length;
            childOffset = mergeTo.isLeaf()
                ? mergeTo.values.length
                : mergeTo.children.length;
        }
        else {
            throw new Exception(ErrorCode.ASSERTION);
        }
        mergeTo.keys.splice(keyOffset, 0, ...this.keys);
        let myChildren = null;
        if (this.isLeaf()) {
            myChildren = this.values;
        }
        else {
            myChildren = this.children;
            myChildren.forEach(node => (node.parent = mergeTo));
        }
        if (mergeTo.isLeaf()) {
            mergeTo.values.splice(childOffset, 0, ...myChildren);
        }
        else {
            mergeTo.children.splice(childOffset, 0, ...myChildren);
        }
        BTreeNode.associate(this.prev, this.next);
        if (!mergeTo.isLeaf()) {
            mergeTo.fix();
        }
        if (parentPos !== -1) {
            this.parent.keys.splice(parentPos, 1);
            this.parent.children.splice(parentPos, 1);
        }
    }
    splitLeaf() {
        const half = BTreeNode.MIN_KEY_LEN;
        const right = BTreeNode.create(this.tree);
        const root = BTreeNode.create(this.tree);
        root.height = 1;
        root.keys = [this.keys[half]];
        root.children = [this, right];
        root.parent = this.parent;
        this.parent = root;
        right.keys = this.keys.splice(half);
        right.values = this.values.splice(half);
        right.parent = root;
        BTreeNode.associate(right, this.next);
        BTreeNode.associate(this, right);
        return root;
    }
    splitInternal() {
        const half = BTreeNode.MIN_KEY_LEN;
        const root = BTreeNode.create(this.tree);
        const right = BTreeNode.create(this.tree);
        root.parent = this.parent;
        root.height = this.height + 1;
        root.keys = [this.keys[half]];
        root.children = [this, right];
        this.keys.splice(half, 1);
        right.parent = root;
        right.height = this.height;
        right.keys = this.keys.splice(half);
        right.children = this.children.splice(half + 1);
        right.children.forEach(node => (node.parent = right));
        this.parent = root;
        BTreeNode.associate(right, this.next);
        BTreeNode.associate(this, right);
        return root;
    }
    searchKey(key) {
        let left = 0;
        let right = this.keys.length;
        const c = this.tree.comparator();
        while (left < right) {
            const middle = (left + right) >> 1;
            if (c.compare(this.keys[middle], key) === Favor.RHS) {
                left = middle + 1;
            }
            else {
                right = middle;
            }
        }
        return left;
    }
    getContainingLeafSingleKey(key) {
        if (!this.isLeaf()) {
            let pos = this.searchKey(key);
            if (this.tree.eq(this.keys[pos], key)) {
                pos++;
            }
            return this.children[pos].getContainingLeaf(key);
        }
        return this;
    }
    getContainingLeafMultiKey(key) {
        if (!this.isLeaf()) {
            let pos = this.searchKey(key);
            if (this.tree.eq(this.keys[pos], key)) {
                const hasUnbound = key.some(dimension => dimension === SingleKeyRange.UNBOUND_VALUE);
                if (!hasUnbound) {
                    pos++;
                }
            }
            return this.children[pos].getContainingLeafMultiKey(key);
        }
        return this;
    }
    appendResultsAt(params, results, i) {
        if (this.tree.isUniqueKey()) {
            if (!params.reverse && params.skip) {
                params.skip--;
                return;
            }
            results[params.count++] = this.values[i];
        }
        else {
            const val = this.values[i];
            for (let j = 0; j < val.length && params.count < results.length; ++j) {
                if (!params.reverse && params.skip) {
                    params.skip--;
                    continue;
                }
                results[params.count++] = val[j];
            }
        }
    }
    appendResults(params, results, from, to) {
        for (let i = from; i < to; ++i) {
            if (!params.reverse && params.count >= params.limit) {
                return;
            }
            this.appendResultsAt(params, results, i);
        }
    }
}
BTreeNode.MAX_COUNT = 512;
BTreeNode.MAX_KEY_LEN = BTreeNode.MAX_COUNT - 1;
BTreeNode.MIN_KEY_LEN = BTreeNode.MAX_COUNT >> 1;
class SimpleComparator {
    static compareAscending(lhs, rhs) {
        return lhs > rhs ? Favor.LHS : lhs < rhs ? Favor.RHS : Favor.TIE;
    }
    static compareDescending(lhs, rhs) {
        return SimpleComparator.compareAscending(rhs, lhs);
    }
    static orderRangeAscending(lhs, rhs) {
        return SingleKeyRange.compare(lhs, rhs);
    }
    static orderRangeDescending(lhs, rhs) {
        return SingleKeyRange.compare(rhs, lhs);
    }
    constructor(order) {
        this.compareFn =
            order === Order.DESC
                ? SimpleComparator.compareDescending
                : SimpleComparator.compareAscending;
        this.normalizeKeyRange =
            order === Order.DESC
                ? (keyRange) => {
                    return keyRange !== undefined && keyRange !== null
                        ? keyRange.reverse()
                        : null;
                }
                : (keyRange) => keyRange || null;
        this.orderRange =
            order === Order.DESC
                ? SimpleComparator.orderRangeDescending
                : SimpleComparator.orderRangeAscending;
    }
    compareRange(key, naturalRange) {
        const LEFT = 0;
        const RIGHT = 1;
        const range = this.normalizeKeyRange(naturalRange);
        const results = [
            SingleKeyRange.isUnbound(range.from),
            SingleKeyRange.isUnbound(range.to),
        ];
        if (!results[LEFT]) {
            const favor = this.compareFn(key, range.from);
            results[LEFT] = range.excludeLower
                ? favor === Favor.LHS
                : favor !== Favor.RHS;
        }
        if (!results[RIGHT]) {
            const favor = this.compareFn(key, range.to);
            results[RIGHT] = range.excludeUpper
                ? favor === Favor.RHS
                : favor !== Favor.LHS;
        }
        return results;
    }
    compare(lhs, rhs) {
        return this.compareFn(lhs, rhs);
    }
    min(lhs, rhs) {
        return lhs < rhs ? Favor.LHS : lhs === rhs ? Favor.TIE : Favor.RHS;
    }
    max(lhs, rhs) {
        return lhs > rhs ? Favor.LHS : lhs === rhs ? Favor.TIE : Favor.RHS;
    }
    isInRange(key, range) {
        const results = this.compareRange(key, range);
        return results[0] && results[1];
    }
    isFirstKeyInRange(key, range) {
        return this.isInRange(key, range);
    }
    getAllRange() {
        return SingleKeyRange.all();
    }
    orderKeyRange(lhs, rhs) {
        return this.orderRange(lhs, rhs);
    }
    sortKeyRanges(keyRanges) {
        return keyRanges
            .filter(range => range !== null)
            .sort((lhs, rhs) => this.orderKeyRange(lhs, rhs));
    }
    isLeftOpen(range) {
        return SingleKeyRange.isUnbound(this.normalizeKeyRange(range).from);
    }
    rangeToKeys(naturalRange) {
        const range = this.normalizeKeyRange(naturalRange);
        return [range.from, range.to];
    }
    comparable(key) {
        return key !== null;
    }
    keyDimensions() {
        return 1;
    }
    toString() {
        return this.compare === SimpleComparator.compareDescending
            ? 'SimpleComparator_DESC'
            : 'SimpleComparator_ASC';
    }
}
class MultiKeyComparator {
    static createOrders(numKeys, order) {
        const orders = new Array(numKeys);
        for (let i = 0; i < numKeys; ++i) {
            orders[i] = order;
        }
        return orders;
    }
    constructor(orders) {
        this.comparators = orders.map(order => new SimpleComparator(order));
    }
    compare(lk, rk) {
        const lhs = lk;
        const rhs = rk;
        return this.forEach(lhs, rhs, (c, l, r) => {
            return l === SingleKeyRange.UNBOUND_VALUE ||
                r === SingleKeyRange.UNBOUND_VALUE
                ? Favor.TIE
                : c.compare(l, r);
        });
    }
    min(lk, rk) {
        const lhs = lk;
        const rhs = rk;
        return this.forEach(lhs, rhs, (c, l, r) => c.min(l, r));
    }
    max(lk, rk) {
        const lhs = lk;
        const rhs = rk;
        return this.forEach(lhs, rhs, (c, l, r) => c.max(l, r));
    }
    compareRange(k, range) {
        const key = k;
        const results = [true, true];
        for (let i = 0; i < this.comparators.length && (results[0] || results[1]); ++i) {
            const dimensionResults = this.comparators[i].compareRange(key[i], range[i]);
            results[0] = results[0] && dimensionResults[0];
            results[1] = results[1] && dimensionResults[1];
        }
        return results;
    }
    isInRange(k, range) {
        const key = k;
        let isInRange = true;
        for (let i = 0; i < this.comparators.length && isInRange; ++i) {
            isInRange = this.comparators[i].isInRange(key[i], range[i]);
        }
        return isInRange;
    }
    isFirstKeyInRange(k, range) {
        const key = k;
        return this.comparators[0].isInRange(key[0], range[0]);
    }
    getAllRange() {
        return this.comparators.map(c => c.getAllRange());
    }
    sortKeyRanges(keyRanges) {
        const outputKeyRanges = keyRanges.filter(range => {
            return range.every(r => r !== undefined && r !== null);
        });
        const keysPerDimensions = new Array(this.comparators.length);
        for (let i = 0; i < keysPerDimensions.length; i++) {
            keysPerDimensions[i] = outputKeyRanges.map(range => range[i]);
        }
        keysPerDimensions.forEach((keys, i) => {
            keys.sort((lhs, rhs) => {
                return this.comparators[i].orderKeyRange(lhs, rhs);
            });
        }, this);
        const finalKeyRanges = new Array(outputKeyRanges.length);
        for (let i = 0; i < finalKeyRanges.length; i++) {
            finalKeyRanges[i] = keysPerDimensions.map(keys => keys[i]);
        }
        return finalKeyRanges.sort((lhs, rhs) => {
            let favor = Favor.TIE;
            for (let i = 0; i < this.comparators.length && favor === Favor.TIE; ++i) {
                favor = this.comparators[i].orderKeyRange(lhs[i], rhs[i]);
            }
            return favor;
        });
    }
    isLeftOpen(range) {
        return this.comparators[0].isLeftOpen(range[0]);
    }
    rangeToKeys(keyRange) {
        const startKey = keyRange.map((range, i) => this.comparators[i].rangeToKeys(range)[0]);
        const endKey = keyRange.map((range, i) => this.comparators[i].rangeToKeys(range)[1]);
        return [startKey, endKey];
    }
    comparable(key) {
        return key.every((keyDimension, i) => this.comparators[i].comparable(keyDimension));
    }
    keyDimensions() {
        return this.comparators.length;
    }
    forEach(lhs, rhs, fn) {
        let favor = Favor.TIE;
        for (let i = 0; i < this.comparators.length && favor === Favor.TIE; ++i) {
            favor = fn(this.comparators[i], lhs[i], rhs[i]);
        }
        return favor;
    }
}
class SimpleComparatorWithNull extends SimpleComparator {
    static compareAscending(lhs, rhs) {
        if (lhs === null) {
            return rhs === null ? Favor.TIE : Favor.RHS;
        }
        return rhs === null
            ? Favor.LHS
            : SimpleComparator.compareAscending(lhs, rhs);
    }
    static compareDescending(lhs, rhs) {
        return SimpleComparatorWithNull.compareAscending(rhs, lhs);
    }
    constructor(order) {
        super(order);
        this.compareFn =
            order === Order.DESC
                ? SimpleComparatorWithNull.compareDescending
                : SimpleComparatorWithNull.compareAscending;
    }
    isInRange(key, range) {
        return key === null ? range.isAll() : super.isInRange(key, range);
    }
    min(lhs, rhs) {
        const results = this.minMax(lhs, rhs);
        return results === null ? super.min(lhs, rhs) : results;
    }
    max(lhs, rhs) {
        const results = this.minMax(lhs, rhs);
        return results === null ? super.max(lhs, rhs) : results;
    }
    minMax(lhs, rhs) {
        if (lhs === null) {
            return rhs === null ? Favor.TIE : Favor.RHS;
        }
        return rhs === null ? Favor.LHS : null;
    }
}
class MultiKeyComparatorWithNull extends MultiKeyComparator {
    constructor(orders) {
        super(orders);
        this.comparators = orders.map(order => {
            return new SimpleComparatorWithNull(order);
        });
    }
}
class ComparatorFactory {
    static create(indexSchema) {
        if (indexSchema.columns.length === 1) {
            return new SimpleComparator(indexSchema.columns[0].order);
        }
        const orders = indexSchema.columns.map(col => col.order);
        const nullable = indexSchema.columns.some(col => col.schema.isNullable());
        return nullable
            ? new MultiKeyComparatorWithNull(orders)
            : new MultiKeyComparator(orders);
    }
}
class NullableIndex {
    static deserialize(deserializeFn, rows) {
        let index = -1;
        for (let i = 0; i < rows.length; ++i) {
            if (rows[i].id() === NullableIndex.NULL_ROW_ID) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            throw new Exception(ErrorCode.DATA_CORRUPTION);
        }
        const nulls = rows[index].payload()['v'];
        const newRows = rows.slice(0);
        newRows.splice(index, 1);
        const tree = deserializeFn(newRows);
        const nullableIndex = new NullableIndex(tree);
        nulls.forEach(rowId => nullableIndex.nulls.add(rowId));
        return nullableIndex;
    }
    constructor(index) {
        this.index = index;
        this.nulls = new Set();
        this.statsNull = new IndexStats();
        this.statsObj = new IndexStats();
    }
    getName() {
        return this.index.getName();
    }
    add(key, value) {
        if (key === null) {
            this.nulls.add(value);
            this.statsNull.add(key, 1);
        }
        else {
            this.index.add(key, value);
        }
    }
    set(key, value) {
        if (key === null) {
            this.nulls.clear();
            this.statsNull.clear();
            this.add(key, value);
        }
        else {
            this.index.set(key, value);
        }
    }
    remove(key, rowId) {
        if (key === null) {
            if (rowId) {
                this.nulls.delete(rowId);
                this.statsNull.remove(key, 1);
            }
            else {
                this.nulls.clear();
                this.statsNull.clear();
            }
        }
        else {
            this.index.remove(key, rowId);
        }
    }
    get(key) {
        if (key === null) {
            return Array.from(this.nulls.values());
        }
        else {
            return this.index.get(key);
        }
    }
    min() {
        return this.index.min();
    }
    max() {
        return this.index.max();
    }
    cost(keyRange) {
        return this.index.cost(keyRange);
    }
    getRange(range, reverseOrder, limit, skip) {
        const results = this.index.getRange(range, reverseOrder, limit, skip);
        if (range !== undefined && range !== null) {
            return results;
        }
        return results.concat(Array.from(this.nulls.values()));
    }
    clear() {
        this.nulls.clear();
        this.index.clear();
    }
    containsKey(key) {
        return key === null ? this.nulls.size !== 0 : this.index.containsKey(key);
    }
    serialize() {
        const rows = [
            new Row(NullableIndex.NULL_ROW_ID, {
                v: Array.from(this.nulls.values()),
            }),
        ];
        return rows.concat(this.index.serialize());
    }
    comparator() {
        return this.index.comparator();
    }
    isUniqueKey() {
        return this.index.isUniqueKey();
    }
    stats() {
        this.statsObj.updateFromList([this.index.stats(), this.statsNull]);
        return this.statsObj;
    }
}
NullableIndex.NULL_ROW_ID = -2;
class RowId {
    static deserialize(name, rows) {
        const index = new RowId(name);
        const rowIds = rows[0].payload()['v'];
        rowIds.forEach(rowId => index.add(rowId, rowId));
        return index;
    }
    constructor(name) {
        this.name = name;
        this.rows = new Set();
        this.comparatorObj = new SimpleComparator(Order.ASC);
    }
    getName() {
        return this.name;
    }
    add(key, value) {
        if (typeof key !== 'number') {
            throw new Exception(ErrorCode.INVALID_ROW_ID);
        }
        this.rows.add(key);
    }
    set(key, value) {
        this.add(key, value);
    }
    remove(key, rowId) {
        this.rows.delete(key);
    }
    get(key) {
        return this.containsKey(key) ? [key] : RowId.EMPTY_ARRAY;
    }
    min() {
        return this.minMax(this.comparatorObj.min.bind(this.comparatorObj));
    }
    max() {
        return this.minMax(this.comparatorObj.max.bind(this.comparatorObj));
    }
    cost(keyRange) {
        return this.rows.size;
    }
    getRange(range, reverseOrder, limit, skip) {
        const keyRanges = range || [
            SingleKeyRange.all(),
        ];
        const values = Array.from(this.rows.values()).filter(value => {
            return keyRanges.some(r => this.comparatorObj.isInRange(value, r));
        }, this);
        return IndexHelper.slice(values, reverseOrder, limit, skip);
    }
    clear() {
        this.rows.clear();
    }
    containsKey(key) {
        return this.rows.has(key);
    }
    serialize() {
        return [new Row(RowId.ROW_ID, { v: Array.from(this.rows.values()) })];
    }
    comparator() {
        return this.comparatorObj;
    }
    isUniqueKey() {
        return true;
    }
    stats() {
        const stats = new IndexStats();
        stats.totalRows = this.rows.size;
        return stats;
    }
    minMax(compareFn) {
        if (this.rows.size === 0) {
            return null;
        }
        const keys = Array.from(this.rows.values()).reduce((keySoFar, key) => {
            return keySoFar === null || compareFn(key, keySoFar) === Favor.LHS
                ? key
                : keySoFar;
        });
        return [keys, [keys]];
    }
}
RowId.ROW_ID = 0;
RowId.EMPTY_ARRAY = [];
class Prefetcher {
    constructor(global) {
        this.backStore = global.getService(Service.BACK_STORE);
        this.indexStore = global.getService(Service.INDEX_STORE);
        this.cache = global.getService(Service.CACHE);
    }
    init(schema) {
        const tables = schema.tables();
        const execSequentially = () => {
            if (tables.length === 0) {
                return Promise.resolve();
            }
            const table = tables.shift();
            const whenTableFetched = table.persistentIndex()
                ? this.fetchTableWithPersistentIndices(table)
                : this.fetchTable(table);
            return whenTableFetched.then(execSequentially);
        };
        return execSequentially();
    }
    fetchTable(table) {
        const tx = this.backStore.createTx(TransactionType.READ_ONLY, [table]);
        const store = tx.getTable(table.getName(), table.deserializeRow.bind(table), TableType.DATA);
        const promise = store.get([]).then(results => {
            this.cache.setMany(table.getName(), results);
            this.reconstructNonPersistentIndices(table, results);
        });
        tx.commit();
        return promise;
    }
    reconstructNonPersistentIndices(tableSchema, tableRows) {
        const indices = this.indexStore.getTableIndices(tableSchema.getName());
        tableRows.forEach(row => {
            indices.forEach(index => {
                const key = row.keyOfIndex(index.getName());
                index.add(key, row.id());
            });
        });
    }
    fetchTableWithPersistentIndices(tableSchema) {
        const tx = this.backStore.createTx(TransactionType.READ_ONLY, [
            tableSchema,
        ]);
        const store = tx.getTable(tableSchema.getName(), tableSchema.deserializeRow, TableType.DATA);
        const whenTableContentsFetched = store.get([]).then(results => {
            this.cache.setMany(tableSchema.getName(), results);
        });
        const whenIndicesReconstructed = tableSchema.getIndices()
            .map((indexSchema) => this.reconstructPersistentIndex(indexSchema, tx))
            .concat(this.reconstructPersistentRowIdIndex(tableSchema, tx));
        tx.commit();
        return Promise.all(whenIndicesReconstructed.concat(whenTableContentsFetched)).then(() => {
            return;
        });
    }
    reconstructPersistentIndex(indexSchema, tx) {
        const indexTable = tx.getTable(indexSchema.getNormalizedName(), Row.deserialize, TableType.INDEX);
        const comparator = ComparatorFactory.create(indexSchema);
        return indexTable.get([]).then(serializedRows => {
            if (serializedRows.length > 0) {
                if (indexSchema.hasNullableColumn()) {
                    const deserializeFn = BTree.deserialize.bind(undefined, comparator, indexSchema.getNormalizedName(), indexSchema.isUnique);
                    const nullableIndex = NullableIndex.deserialize(deserializeFn, serializedRows);
                    this.indexStore.set(indexSchema.tableName, nullableIndex);
                }
                else {
                    const btreeIndex = BTree.deserialize(comparator, indexSchema.getNormalizedName(), indexSchema.isUnique, serializedRows);
                    this.indexStore.set(indexSchema.tableName, btreeIndex);
                }
            }
        });
    }
    reconstructPersistentRowIdIndex(tableSchema, tx) {
        const indexTable = tx.getTable(tableSchema.getRowIdIndexName(), Row.deserialize, TableType.INDEX);
        return indexTable.get([]).then(serializedRows => {
            if (serializedRows.length > 0) {
                const rowIdIndex = RowId.deserialize(tableSchema.getRowIdIndexName(), serializedRows);
                this.indexStore.set(tableSchema.getName(), rowIdIndex);
            }
        });
    }
}
class UnknownTable {
    constructor() {
        this._alias = null;
    }
    getName() {
        return '#UnknownTable';
    }
    getColumns() {
        return [];
    }
    getIndices() {
        return [];
    }
    persistentIndex() {
        return false;
    }
    getAlias() {
        return this._alias;
    }
    getEffectiveName() {
        return this._alias || this.getName();
    }
    getRowIdIndexName() {
        return '#UnknownTable.#';
    }
    createRow(value) {
        throw new Exception(ErrorCode.NOT_SUPPORTED);
    }
    deserializeRow(dbRecord) {
        throw new Exception(ErrorCode.NOT_SUPPORTED);
    }
    getConstraint() {
        return null;
    }
    as(alias) {
        this._alias = alias;
        return this;
    }
    col(name) {
        return null;
    }
}
class StarColumn extends NonPredicateProvider {
    constructor(alias) {
        super();
        this.alias = alias || null;
        this.table = new UnknownTable();
    }
    getName() {
        return '*';
    }
    getNormalizedName() {
        return this.getName();
    }
    toString() {
        return this.getNormalizedName();
    }
    getTable() {
        return this.table;
    }
    getType() {
        return Type.NUMBER;
    }
    getAlias() {
        return this.alias;
    }
    getIndices() {
        return [];
    }
    getIndex() {
        return null;
    }
    isNullable() {
        return false;
    }
    isUnique() {
        return false;
    }
    as(alias) {
        const clone = new StarColumn(alias);
        clone.table = this.table;
        return clone;
    }
}
export class fn {
    static avg(col) {
        return new AggregatedColumn(col, FnType.AVG);
    }
    static count(column) {
        const col = column || new StarColumn();
        return new AggregatedColumn(col, FnType.COUNT);
    }
    static distinct(col) {
        return new AggregatedColumn(col, FnType.DISTINCT);
    }
    static max(col) {
        return new AggregatedColumn(col, FnType.MAX);
    }
    static min(col) {
        return new AggregatedColumn(col, FnType.MIN);
    }
    static stddev(col) {
        return new AggregatedColumn(col, FnType.STDDEV);
    }
    static sum(col) {
        return new AggregatedColumn(col, FnType.SUM);
    }
    static geomean(col) {
        return new AggregatedColumn(col, FnType.GEOMEAN);
    }
}
class MemoryIndexStore {
    constructor() {
        this.store = new Map();
        this.tableIndices = new Map();
    }
    init(schema) {
        const tables = schema.tables();
        tables.forEach(table => {
            const tableIndices = [];
            this.tableIndices.set(table.getName(), tableIndices);
            const rowIdIndexName = table.getRowIdIndexName();
            const rowIdIndex = this.get(rowIdIndexName);
            if (rowIdIndex === null) {
                const index = new RowId(rowIdIndexName);
                tableIndices.push(index);
                this.store.set(rowIdIndexName, index);
            }
            table.getIndices().forEach(indexSchema => {
                const index = this.createIndex(indexSchema);
                tableIndices.push(index);
                this.store.set(indexSchema.getNormalizedName(), index);
            }, this);
        }, this);
        return Promise.resolve();
    }
    get(name) {
        return this.store.get(name) || null;
    }
    set(tableName, index) {
        let tableIndices = this.tableIndices.get(tableName) || null;
        if (tableIndices === null) {
            tableIndices = [];
            this.tableIndices.set(tableName, tableIndices);
        }
        let existsAt = -1;
        for (let i = 0; i < tableIndices.length; i++) {
            if (tableIndices[i].getName() === index.getName()) {
                existsAt = i;
                break;
            }
        }
        if (existsAt >= 0 && tableIndices.length > 0) {
            tableIndices.splice(existsAt, 1, index);
        }
        else {
            tableIndices.push(index);
        }
        this.store.set(index.getName(), index);
    }
    getTableIndices(tableName) {
        return this.tableIndices.get(tableName) || [];
    }
    createIndex(indexSchema) {
        const comparator = ComparatorFactory.create(indexSchema);
        const index = new BTree(indexSchema.getNormalizedName(), comparator, indexSchema.isUnique);
        return indexSchema.hasNullableColumn() && indexSchema.columns.length === 1
            ? new NullableIndex(index)
            : index;
    }
}
function createPredicate(lhs, rhs, type) {
    if (rhs === null) {
        return new ValuePredicate(lhs, rhs, type);
    }
    const r = rhs;
    if (r.getIndex && r.getIndices) {
        return new JoinPredicate(lhs, r, type);
    }
    return new ValuePredicate(lhs, rhs, type);
}
class RewritePass {
}
class LogicalQueryPlanNode extends TreeNode {
    constructor() {
        super();
    }
}
class SelectNode extends LogicalQueryPlanNode {
    constructor(predicate) {
        super();
        this.predicate = predicate;
    }
    toString() {
        return `select(${this.predicate.toString()})`;
    }
}
class AndPredicatePass extends RewritePass {
    constructor() {
        super();
    }
    rewrite(rootNode, context) {
        this.rootNode = rootNode;
        this.traverse(this.rootNode);
        return this.rootNode;
    }
    traverse(rootNode) {
        if (rootNode instanceof SelectNode) {
            assert(rootNode.getChildCount() === 1, 'SelectNode must have exactly one child.');
            const predicates = this.breakAndPredicate(rootNode.predicate);
            const newNodes = this.createSelectNodeChain(predicates);
            TreeHelper.replaceNodeWithChain(rootNode, newNodes[0], newNodes[1]);
            if (rootNode === this.rootNode) {
                this.rootNode = newNodes[0];
            }
            rootNode = newNodes[0];
        }
        rootNode.getChildren().forEach(child => this.traverse(child));
    }
    breakAndPredicate(predicate) {
        if (predicate.getChildCount() === 0) {
            return [predicate];
        }
        const combinedPredicate = predicate;
        if (combinedPredicate.operator !== Operator.AND) {
            return [predicate];
        }
        const predicates = combinedPredicate
            .getChildren()
            .slice()
            .map(childPredicate => {
            combinedPredicate.removeChild(childPredicate);
            return this.breakAndPredicate(childPredicate);
        });
        return ArrayHelper.flatten(predicates);
    }
    createSelectNodeChain(predicates) {
        let parentNode = null;
        let lastNode = null;
        predicates.map((predicate, index) => {
            const node = new SelectNode(predicate);
            if (index === 0) {
                parentNode = node;
            }
            else {
                lastNode.addChild(node);
            }
            lastNode = node;
        }, this);
        return [
            parentNode,
            lastNode,
        ];
    }
}
class CrossProductNode extends LogicalQueryPlanNode {
    constructor() {
        super();
    }
    toString() {
        return 'cross_product';
    }
}
class CrossProductPass extends RewritePass {
    constructor() {
        super();
    }
    rewrite(rootNode, queryContext) {
        if (queryContext.from.length < 3) {
            return rootNode;
        }
        this.rootNode = rootNode;
        this.traverse(this.rootNode);
        return this.rootNode;
    }
    traverse(rootNode) {
        if (rootNode instanceof CrossProductNode) {
            while (rootNode.getChildCount() > 2) {
                const crossProduct = new CrossProductNode();
                for (let i = 0; i < 2; i++) {
                    const child = rootNode.removeChildAt(0);
                    crossProduct.addChild(child);
                }
                rootNode.addChildAt(crossProduct, 0);
            }
        }
        rootNode.getChildren().forEach(child => this.traverse(child));
    }
}
class BaseLogicalPlanGenerator {
    constructor(query) {
        this.query = query;
        this.rootNode = null;
    }
    generate() {
        if (this.rootNode === null) {
            this.rootNode = this.generateInternal();
        }
        return this.rootNode;
    }
}
class DeleteNode extends LogicalQueryPlanNode {
    constructor(table) {
        super();
        this.table = table;
    }
    toString() {
        return `delete(${this.table.getName()})`;
    }
}
class LogicalPlanRewriter {
    constructor(rootNode, queryContext, rewritePasses) {
        this.rootNode = rootNode;
        this.queryContext = queryContext;
        this.rewritePasses = rewritePasses;
    }
    generate() {
        this.rewritePasses.forEach(rewritePass => {
            this.rootNode = rewritePass.rewrite(this.rootNode, this.queryContext);
        }, this);
        return this.rootNode;
    }
}
class TableAccessNode extends LogicalQueryPlanNode {
    constructor(table) {
        super();
        this.table = table;
    }
    toString() {
        const table = this.table;
        const postfix = table.getAlias() ? ` as ${table.getAlias()}` : '';
        return `table_access(${this.table.getName()}${postfix})`;
    }
}
class DeleteLogicalPlanGenerator extends BaseLogicalPlanGenerator {
    constructor(query, rewritePasses) {
        super(query);
        this.rewritePasses = rewritePasses;
    }
    generateInternal() {
        const deleteNode = new DeleteNode(this.query.from);
        const selectNode = this.query.where
            ? new SelectNode(this.query.where.copy())
            : null;
        const tableAccessNode = new TableAccessNode(this.query.from);
        if (selectNode === null) {
            deleteNode.addChild(tableAccessNode);
        }
        else {
            selectNode.addChild(tableAccessNode);
            deleteNode.addChild(selectNode);
        }
        const planRewriter = new LogicalPlanRewriter(deleteNode, this.query, this.rewritePasses);
        return planRewriter.generate();
    }
}
class JoinNode extends LogicalQueryPlanNode {
    constructor(predicate, isOuterJoin) {
        super();
        this.predicate = predicate;
        this.isOuterJoin = isOuterJoin;
    }
    toString() {
        return (`join(type: ${this.isOuterJoin ? 'outer' : 'inner'}, ` +
            `${this.predicate.toString()})`);
    }
}
class ImplicitJoinsPass extends RewritePass {
    constructor() {
        super();
    }
    rewrite(rootNode, context) {
        const queryContext = context;
        if (queryContext.from.length < 2) {
            return rootNode;
        }
        this.rootNode = rootNode;
        this.traverse(this.rootNode, queryContext);
        return this.rootNode;
    }
    traverse(rootNode, queryContext) {
        if (rootNode instanceof SelectNode &&
            rootNode.predicate instanceof JoinPredicate) {
            assert(rootNode.getChildCount() === 1, 'SelectNode must have exactly one child.');
            const predicateId = rootNode.predicate.getId();
            const child = rootNode.getChildAt(0);
            if (child instanceof CrossProductNode) {
                const isOuterJoin = queryContext.outerJoinPredicates &&
                    queryContext.outerJoinPredicates.has(predicateId);
                const joinNode = new JoinNode(rootNode.predicate, isOuterJoin);
                TreeHelper.replaceChainWithNode(rootNode, child, joinNode);
                if (rootNode === this.rootNode) {
                    this.rootNode = joinNode;
                }
                rootNode = joinNode;
            }
        }
        rootNode.getChildren().forEach(child => this.traverse(child, queryContext));
    }
}
class InsertNode extends LogicalQueryPlanNode {
    constructor(table, values) {
        super();
        this.table = table;
        this.values = values;
    }
    toString() {
        return `insert(${this.table.getName()}, R${this.values.length})`;
    }
}
class InsertOrReplaceNode extends LogicalQueryPlanNode {
    constructor(table, values) {
        super();
        this.table = table;
        this.values = values;
    }
    toString() {
        return `insertOrReplace(${this.table.getName()}, R${this.values.length})`;
    }
}
class InsertLogicalPlanGenerator extends BaseLogicalPlanGenerator {
    constructor(query) {
        super(query);
    }
    generateInternal() {
        return this.query.allowReplace
            ? new InsertOrReplaceNode(this.query.into, this.query.values)
            : new InsertNode(this.query.into, this.query.values);
    }
}
class LogicalQueryPlan {
    constructor(rootNode, scope) {
        this.rootNode = rootNode;
        this.scope = scope;
    }
    getRoot() {
        return this.rootNode;
    }
    getScope() {
        return this.scope;
    }
}
class PushDownSelectionsPass extends RewritePass {
    constructor() {
        super();
        this.alreadyPushedDown = new Set();
    }
    rewrite(rootNode, context) {
        const queryContext = context;
        if (queryContext.where === undefined || queryContext.where === null) {
            return rootNode;
        }
        this.clear();
        this.rootNode = rootNode;
        this.traverse(this.rootNode, queryContext);
        this.clear();
        return this.rootNode;
    }
    clear() {
        this.alreadyPushedDown.clear();
    }
    traverse(rootNode, queryContext) {
        const processChildren = (node) => {
            node.getChildren().forEach(processNodeRec);
        };
        const processNodeRec = (node) => {
            if (this.alreadyPushedDown.has(node)) {
                return;
            }
            if (!this.isCandidateNode(node)) {
                processChildren(node);
                return;
            }
            const selectNode = node;
            const selectNodeTables = selectNode.predicate.getTables();
            const shouldPushDownFn = (child) => this.doesReferToTables(child, selectNodeTables);
            const newRoot = this.pushDownNodeRec(queryContext, selectNode, shouldPushDownFn);
            this.alreadyPushedDown.add(selectNode);
            if (newRoot !== selectNode) {
                if (newRoot.getParent() === null) {
                    this.rootNode = newRoot;
                }
                processNodeRec(newRoot);
            }
            processChildren(selectNode);
        };
        processNodeRec(rootNode);
    }
    pushDownNodeRec(queryContext, node, shouldPushDownFn) {
        let newRoot = node;
        if (this.shouldSwapWithChild(queryContext, node)) {
            newRoot = TreeHelper.swapNodeWithChild(node);
            this.pushDownNodeRec(queryContext, node, shouldPushDownFn);
        }
        else if (this.shouldPushBelowChild(node)) {
            const newNodes = [];
            const cloneFn = (n) => {
                const newNode = new SelectNode(n.predicate);
                newNodes.push(newNode);
                return newNode;
            };
            newRoot = TreeHelper.pushNodeBelowChild(node, shouldPushDownFn, cloneFn);
            newNodes.forEach(newNode => this.pushDownNodeRec(queryContext, newNode, shouldPushDownFn));
        }
        return newRoot;
    }
    doesReferToTables(root, tables) {
        const referredTables = new Set();
        TreeHelper.getLeafNodes(root).forEach(tableAccessNode => referredTables.add(tableAccessNode.table));
        if (root instanceof TableAccessNode) {
            referredTables.add(root.table);
        }
        return isSubset(referredTables, tables);
    }
    isCandidateNode(node) {
        return node instanceof SelectNode;
    }
    shouldPushBelowChild(node) {
        const child = node.getChildAt(0);
        return child instanceof CrossProductNode || child instanceof JoinNode;
    }
    shouldSwapWithChild(queryContext, node) {
        const child = node.getChildAt(0);
        if (!(child instanceof SelectNode)) {
            return false;
        }
        if (queryContext.outerJoinPredicates === undefined ||
            queryContext.outerJoinPredicates === null) {
            return true;
        }
        const nodeIsJoin = node.predicate instanceof JoinPredicate;
        const childIsOuterJoin = queryContext.outerJoinPredicates.has(child.predicate.getId());
        return nodeIsJoin || !childIsOuterJoin;
    }
}
class AggregationNode extends LogicalQueryPlanNode {
    constructor(columns) {
        super();
        this.columns = columns;
    }
    toString() {
        return `aggregation(${this.columns.toString()})`;
    }
}
class GroupByNode extends LogicalQueryPlanNode {
    constructor(columns) {
        super();
        this.columns = columns;
    }
    toString() {
        return `group_by(${this.columns.toString()})`;
    }
}
class LimitNode extends LogicalQueryPlanNode {
    constructor(limit) {
        super();
        this.limit = limit;
    }
    toString() {
        return `limit(${this.limit})`;
    }
}
class OrderByNode extends LogicalQueryPlanNode {
    constructor(orderBy) {
        super();
        this.orderBy = orderBy;
    }
    toString() {
        return `order_by(${SelectContext.orderByToString(this.orderBy)})`;
    }
}
class ProjectNode extends LogicalQueryPlanNode {
    constructor(columns, groupByColumns) {
        super();
        this.columns = columns;
        this.groupByColumns = groupByColumns;
    }
    toString() {
        const columns = this.groupByColumns
            ? this.groupByColumns.map(col => col.getNormalizedName()).join(', ')
            : '';
        const postfix = columns.length ? `, groupBy(${columns})` : '';
        return `project(${this.columns.toString()}${postfix})`;
    }
}
class SkipNode extends LogicalQueryPlanNode {
    constructor(skip) {
        super();
        this.skip = skip;
    }
    toString() {
        return `skip(${this.skip})`;
    }
}
class SelectLogicalPlanGenerator extends BaseLogicalPlanGenerator {
    constructor(query, rewritePasses) {
        super(query);
        this.rewritePasses = rewritePasses;
        this.tableAccessNodes = null;
        this.crossProductNode = null;
        this.selectNode = null;
        this.groupByNode = null;
        this.aggregationNode = null;
        this.orderByNode = null;
        this.skipNode = null;
        this.limitNode = null;
        this.projectNode = null;
    }
    generateInternal() {
        this.generateNodes();
        const rootNode = this.connectNodes();
        const planRewriter = new LogicalPlanRewriter(rootNode, this.query, this.rewritePasses);
        return planRewriter.generate();
    }
    generateNodes() {
        this.generateTableAccessNodes();
        this.generateCrossProductNode();
        this.generateSelectNode();
        this.generateOrderByNode();
        this.generateSkipNode();
        this.generateLimitNode();
        this.generateGroupByNode();
        this.generateAggregationNode();
        this.generateProjectNode();
    }
    connectNodes() {
        const parentOrder = [
            this.limitNode,
            this.skipNode,
            this.projectNode,
            this.orderByNode,
            this.aggregationNode,
            this.groupByNode,
            this.selectNode,
            this.crossProductNode,
        ];
        let lastExistingParentIndex = -1;
        let rootNode = null;
        for (let i = 0; i < parentOrder.length; i++) {
            const node = parentOrder[i];
            if (node !== null) {
                if (rootNode === null) {
                    rootNode = node;
                }
                else {
                    parentOrder[lastExistingParentIndex].addChild(node);
                }
                lastExistingParentIndex = i;
            }
        }
        this.tableAccessNodes.forEach(tableAccessNode => {
            parentOrder[lastExistingParentIndex].addChild(tableAccessNode);
        });
        return rootNode;
    }
    generateTableAccessNodes() {
        this.tableAccessNodes = this.query.from.map(table => new TableAccessNode(table));
    }
    generateCrossProductNode() {
        if (this.query.from.length >= 2) {
            this.crossProductNode = new CrossProductNode();
        }
    }
    generateSelectNode() {
        if (this.query.where) {
            this.selectNode = new SelectNode(this.query.where.copy());
        }
    }
    generateOrderByNode() {
        if (this.query.orderBy) {
            this.orderByNode = new OrderByNode(this.query.orderBy);
        }
    }
    generateSkipNode() {
        if ((this.query.skip && this.query.skip > 0) || this.query.skipBinder) {
            this.skipNode = new SkipNode(this.query.skip);
        }
    }
    generateLimitNode() {
        if (this.query.limit !== undefined && this.query.limit !== null) {
            this.limitNode = new LimitNode(this.query.limit);
        }
    }
    generateGroupByNode() {
        if (this.query.groupBy) {
            this.groupByNode = new GroupByNode(this.query.groupBy);
        }
    }
    generateAggregationNode() {
        const aggregatedColumns = this.query.columns.filter(column => {
            return column instanceof AggregatedColumn;
        });
        if (this.query.orderBy) {
            this.query.orderBy.forEach(orderBy => {
                if (orderBy.column instanceof AggregatedColumn) {
                    aggregatedColumns.push(orderBy.column);
                }
            });
        }
        if (aggregatedColumns.length > 0) {
            this.aggregationNode = new AggregationNode(aggregatedColumns);
        }
    }
    generateProjectNode() {
        this.projectNode = new ProjectNode(this.query.columns || [], this.query.groupBy || null);
    }
}
class UpdateNode extends LogicalQueryPlanNode {
    constructor(table) {
        super();
        this.table = table;
    }
    toString() {
        return `update(${this.table.getName()})`;
    }
}
class UpdateLogicalPlanGenerator extends BaseLogicalPlanGenerator {
    constructor(query) {
        super(query);
    }
    generateInternal() {
        const updateNode = new UpdateNode(this.query.table);
        const selectNode = this.query.where !== null
            ? new SelectNode(this.query.where.copy())
            : null;
        const tableAccessNode = new TableAccessNode(this.query.table);
        if (selectNode === null) {
            updateNode.addChild(tableAccessNode);
        }
        else {
            selectNode.addChild(tableAccessNode);
            updateNode.addChild(selectNode);
        }
        return updateNode;
    }
}
class LogicalPlanFactory {
    constructor() {
        this.selectOptimizationPasses = [
            new AndPredicatePass(),
            new CrossProductPass(),
            new PushDownSelectionsPass(),
            new ImplicitJoinsPass(),
        ];
        this.deleteOptimizationPasses = [new AndPredicatePass()];
    }
    create(query) {
        let generator = null;
        if (query instanceof InsertContext) {
            generator = new InsertLogicalPlanGenerator(query);
        }
        else if (query instanceof DeleteContext) {
            generator = new DeleteLogicalPlanGenerator(query, this.deleteOptimizationPasses);
        }
        else if (query instanceof SelectContext) {
            generator = new SelectLogicalPlanGenerator(query, this.selectOptimizationPasses);
        }
        else if (query instanceof UpdateContext) {
            generator = new UpdateLogicalPlanGenerator(query);
        }
        else {
            throw new Exception(ErrorCode.UNKNOWN_QUERY_CONTEXT);
        }
        const rootNode = generator.generate();
        return new LogicalQueryPlan(rootNode, query.getScope());
    }
}
class AggregationCalculator {
    constructor(relation, columns) {
        this.relation = relation;
        this.columns = columns;
    }
    calculate() {
        this.columns.forEach(column => {
            const reverseColumnChain = column.getColumnChain().reverse();
            for (let i = 1; i < reverseColumnChain.length; i++) {
                const currentColumn = reverseColumnChain[i];
                const leafColumn = currentColumn.getColumnChain().slice(-1)[0];
                const inputRelation = this.getInputRelationFor(currentColumn);
                if (inputRelation.hasAggregationResult(currentColumn)) {
                    return;
                }
                const result = this.evalAggregation(currentColumn.aggregatorType, inputRelation, leafColumn);
                this.relation.setAggregationResult(currentColumn, result);
            }
        }, this);
    }
    getInputRelationFor(column) {
        return column.child instanceof AggregatedColumn
            ? this.relation.getAggregationResult(column.child)
            : this.relation;
    }
    evalAggregation(aggregatorType, relation, column) {
        let result = null;
        switch (aggregatorType) {
            case FnType.MIN:
                result = this.reduce(relation, column, (s, v) => {
                    const soFar = s;
                    const value = v;
                    return value < soFar ? value : soFar;
                });
                break;
            case FnType.MAX:
                result = this.reduce(relation, column, (s, v) => {
                    const soFar = s;
                    const value = v;
                    return value > soFar ? value : soFar;
                });
                break;
            case FnType.DISTINCT:
                result = this.distinct(relation, column);
                break;
            case FnType.COUNT:
                result = this.count(relation, column);
                break;
            case FnType.SUM:
                result = this.sum(relation, column);
                break;
            case FnType.AVG: {
                const count = this.count(relation, column);
                if (count > 0) {
                    result = this.sum(relation, column) / count;
                }
                break;
            }
            case FnType.GEOMEAN:
                result = this.geomean(relation, column);
                break;
            default:
                result = this.stddev(relation, column);
                break;
        }
        return result;
    }
    reduce(relation, column, reduceFn) {
        return relation.entries.reduce((soFar, entry) => {
            const value = entry.getField(column);
            if (value === null) {
                return soFar;
            }
            return soFar === null ? value : reduceFn(soFar, value);
        }, null);
    }
    count(relation, column) {
        if (column instanceof StarColumn) {
            return relation.entries.length;
        }
        return relation.entries.reduce((soFar, entry) => {
            return soFar + (entry.getField(column) === null ? 0 : 1);
        }, 0);
    }
    sum(relation, column) {
        return this.reduce(relation, column, (s, v) => {
            const soFar = s;
            const value = v;
            return value + soFar;
        });
    }
    stddev(relation, column) {
        const values = [];
        relation.entries.forEach(entry => {
            const value = entry.getField(column);
            if (value !== null) {
                values.push(value);
            }
        });
        return values.length === 0
            ? null
            : MathHelper.standardDeviation.apply(null, values);
    }
    geomean(relation, column) {
        let nonZeroEntriesCount = 0;
        const reduced = relation.entries.reduce((soFar, entry) => {
            const value = entry.getField(column);
            if (value !== null && value !== 0) {
                nonZeroEntriesCount++;
                return soFar + Math.log(value);
            }
            else {
                return soFar;
            }
        }, 0);
        return nonZeroEntriesCount === 0
            ? null
            : Math.pow(Math.E, reduced / nonZeroEntriesCount);
    }
    distinct(relation, column) {
        const distinctMap = new Map();
        relation.entries.forEach(entry => {
            const value = entry.getField(column);
            distinctMap.set(value, entry);
        });
        return new Relation(Array.from(distinctMap.values()), relation.getTables());
    }
}
class AggregationStep extends PhysicalQueryPlanNode {
    constructor(aggregatedColumns) {
        super(PhysicalQueryPlanNode.ANY, ExecType.FIRST_CHILD);
        this.aggregatedColumns = aggregatedColumns;
    }
    toString() {
        const columnNames = this.aggregatedColumns.map(column => column.getNormalizedName());
        return `aggregation(${columnNames.toString()})`;
    }
    execInternal(relations, journal, context) {
        relations.forEach(relation => {
            const calculator = new AggregationCalculator(relation, this.aggregatedColumns);
            calculator.calculate();
        }, this);
        return relations;
    }
}
class CrossProductStep extends PhysicalQueryPlanNode {
    constructor() {
        super(2, ExecType.ALL);
    }
    toString() {
        return 'cross_product';
    }
    execInternal(relations, journal, context) {
        return this.crossProduct(relations[0], relations[1]);
    }
    crossProduct(leftRelation, rightRelation) {
        const combinedEntries = [];
        const leftRelationTableNames = leftRelation.getTables();
        const rightRelationTableNames = rightRelation.getTables();
        leftRelation.entries.forEach(le => {
            rightRelation.entries.forEach(re => {
                const combinedEntry = RelationEntry.combineEntries(le, leftRelationTableNames, re, rightRelationTableNames);
                combinedEntries.push(combinedEntry);
            });
        });
        const srcTables = leftRelation
            .getTables()
            .concat(rightRelation.getTables());
        return [new Relation(combinedEntries, srcTables)];
    }
}
class DeleteStep extends PhysicalQueryPlanNode {
    constructor(table) {
        super(1, ExecType.FIRST_CHILD);
        this.table = table;
    }
    toString() {
        return `delete(${this.table.getName()})`;
    }
    execInternal(relations, journal, context) {
        const rows = relations[0].entries.map(entry => entry.row);
        journal.remove(this.table, rows);
        return [Relation.createEmpty()];
    }
}
class GetRowCountStep extends PhysicalQueryPlanNode {
    constructor(global, table) {
        super(0, ExecType.NO_CHILD);
        this.table = table;
        this.indexStore = global.getService(Service.INDEX_STORE);
    }
    toString() {
        return `get_row_count(${this.table.getName()})`;
    }
    execInternal(relations, journal, context) {
        const rowIdIndex = this.indexStore.get(this.table.getRowIdIndexName());
        const relation = new Relation([], [this.table.getName()]);
        relation.setAggregationResult(fn.count(), rowIdIndex.stats().totalRows);
        return [relation];
    }
}
class TableAccessFullStep extends PhysicalQueryPlanNode {
    constructor(global, table) {
        super(0, ExecType.NO_CHILD);
        this.table = table;
        this.cache = global.getService(Service.CACHE);
        this.indexStore = global.getService(Service.INDEX_STORE);
    }
    toString() {
        let postfix = '';
        const table = this.table;
        if (table.getAlias()) {
            postfix = ` as ${table.getAlias()}`;
        }
        return `table_access(${this.table.getName()}${postfix})`;
    }
    execInternal(relations, journal, context) {
        const table = this.table;
        const rowIds = this.indexStore.get(table.getRowIdIndexName()).getRange();
        return [
            Relation.fromRows(this.cache.getMany(rowIds), [
                table.getEffectiveName(),
            ]),
        ];
    }
}
class GetRowCountPass extends RewritePass {
    constructor(global) {
        super();
        this.global = global;
    }
    rewrite(rootNode, queryContext) {
        this.rootNode = rootNode;
        if (!this.canOptimize(queryContext)) {
            return rootNode;
        }
        const tableAccessFullStep = TreeHelper.find(rootNode, node => node instanceof TableAccessFullStep)[0];
        const getRowCountStep = new GetRowCountStep(this.global, tableAccessFullStep.table);
        TreeHelper.replaceNodeWithChain(tableAccessFullStep, getRowCountStep, getRowCountStep);
        return this.rootNode;
    }
    canOptimize(queryContext) {
        const isDefAndNotNull = (v) => v !== null && v !== undefined;
        const isCandidate = queryContext.columns.length === 1 &&
            queryContext.from.length === 1 &&
            !isDefAndNotNull(queryContext.where) &&
            !isDefAndNotNull(queryContext.limit) &&
            !isDefAndNotNull(queryContext.skip) &&
            !isDefAndNotNull(queryContext.groupBy);
        if (isCandidate) {
            const column = queryContext.columns[0];
            return (column instanceof AggregatedColumn &&
                column.aggregatorType === FnType.COUNT &&
                column.child instanceof StarColumn);
        }
        return false;
    }
}
class GroupByStep extends PhysicalQueryPlanNode {
    constructor(groupByColumns) {
        super(1, ExecType.FIRST_CHILD);
        this.groupByColumns = groupByColumns;
    }
    toString() {
        const columnNames = this.groupByColumns.map(column => column.getNormalizedName());
        return `groupBy(${columnNames.toString()})`;
    }
    execInternal(relations, journal, ctx) {
        return this.calculateGroupedRelations(relations[0]);
    }
    calculateGroupedRelations(relation) {
        const groupMap = new MapSet();
        const getKey = (entry) => {
            const keys = this.groupByColumns.map(column => entry.getField(column));
            return keys.join(',');
        };
        relation.entries.forEach(entry => groupMap.set(getKey(entry), entry));
        return groupMap.keys().map(key => {
            return new Relation(groupMap.get(key), relation.getTables());
        });
    }
}
var JoinAlgorithm;
(function (JoinAlgorithm) {
    JoinAlgorithm["HASH"] = "hash";
    JoinAlgorithm["INDEX_NESTED_LOOP"] = "index_nested_loop";
    JoinAlgorithm["NESTED_LOOP"] = "nested_loop";
})(JoinAlgorithm || (JoinAlgorithm = {}));
class JoinStep extends PhysicalQueryPlanNode {
    constructor(global, predicate, isOuterJoin) {
        super(2, ExecType.ALL);
        this.predicate = predicate;
        this.isOuterJoin = isOuterJoin;
        this.indexStore = global.getService(Service.INDEX_STORE);
        this.cache = global.getService(Service.CACHE);
        this.algorithm =
            this.predicate.evaluatorType === EvalType.EQ
                ? JoinAlgorithm.HASH
                : JoinAlgorithm.NESTED_LOOP;
        this.indexJoinInfo = null;
    }
    toString() {
        return (`join(type: ${this.isOuterJoin ? 'outer' : 'inner'}, ` +
            `impl: ${this.algorithm}, ${this.predicate.toString()})`);
    }
    execInternal(relations, journal, context) {
        switch (this.algorithm) {
            case JoinAlgorithm.HASH:
                return [
                    this.predicate.evalRelationsHashJoin(relations[0], relations[1], this.isOuterJoin),
                ];
            case JoinAlgorithm.INDEX_NESTED_LOOP:
                return [
                    this.predicate.evalRelationsIndexNestedLoopJoin(relations[0], relations[1], this.indexJoinInfo, this.cache),
                ];
            default:
                return [
                    this.predicate.evalRelationsNestedLoopJoin(relations[0], relations[1], this.isOuterJoin),
                ];
        }
    }
    markAsIndexJoin(column) {
        this.algorithm = JoinAlgorithm.INDEX_NESTED_LOOP;
        const index = this.indexStore.get(column.getIndex().getNormalizedName());
        this.indexJoinInfo = {
            index: index,
            indexedColumn: column,
            nonIndexedColumn: column === this.predicate.leftColumn
                ? this.predicate.rightColumn
                : this.predicate.leftColumn,
        };
    }
}
class NoOpStep extends PhysicalQueryPlanNode {
    constructor(relations) {
        super(PhysicalQueryPlanNode.ANY, ExecType.NO_CHILD);
        this.relations = relations;
    }
    toString() {
        return `no_op_step(${this.relations[0].getTables().join(',')})`;
    }
    execInternal(relations, journal, context) {
        return this.relations;
    }
}
class IndexJoinPass extends RewritePass {
    constructor() {
        super();
    }
    rewrite(rootNode, queryContext) {
        this.rootNode = rootNode;
        if (!this.canOptimize(queryContext)) {
            return rootNode;
        }
        const joinSteps = TreeHelper.find(rootNode, node => node instanceof JoinStep);
        joinSteps.forEach(this.processJoinStep, this);
        return this.rootNode;
    }
    canOptimize(queryContext) {
        return queryContext.from.length > 1;
    }
    processJoinStep(joinStep) {
        if (joinStep.predicate.evaluatorType !== EvalType.EQ ||
            joinStep.isOuterJoin) {
            return;
        }
        const getColumnForTable = (table) => {
            return table.getEffectiveName() ===
                joinStep.predicate.rightColumn.getTable().getEffectiveName()
                ? joinStep.predicate.rightColumn
                : joinStep.predicate.leftColumn;
        };
        const getCandidate = (executionStep) => {
            if (!(executionStep instanceof TableAccessFullStep)) {
                return null;
            }
            const candidateColumn = getColumnForTable(executionStep.table);
            return candidateColumn.getIndex() === null
                ? null
                : candidateColumn;
        };
        const leftCandidate = getCandidate(joinStep.getChildAt(0));
        const rightCandidate = getCandidate(joinStep.getChildAt(1));
        if (leftCandidate === null && rightCandidate === null) {
            return;
        }
        const chosenColumn = rightCandidate !== null ? rightCandidate : leftCandidate;
        joinStep.markAsIndexJoin(chosenColumn);
        const dummyRelation = new Relation([], [chosenColumn.getTable().getEffectiveName()]);
        joinStep.replaceChildAt(new NoOpStep([dummyRelation]), chosenColumn === leftCandidate ? 0 : 1);
    }
}
class BoundedKeyRangeCalculator {
    constructor(indexSchema, predicateMap) {
        this.indexSchema = indexSchema;
        this.predicateMap = predicateMap;
        this.lastQueryContext = null;
        this.combinations = null;
    }
    getKeyRangeCombinations(queryContext) {
        if (this.lastQueryContext === queryContext) {
            return this.combinations;
        }
        const keyRangeMap = this.calculateKeyRangeMap(queryContext);
        this.fillMissingKeyRanges(keyRangeMap);
        this.combinations =
            this.indexSchema.columns.length === 1
                ? Array.from(keyRangeMap.values())[0].getValues()
                : this.calculateCartesianProduct(this.getSortedKeyRangeSets(keyRangeMap));
        this.lastQueryContext = queryContext;
        return this.combinations;
    }
    calculateKeyRangeMap(queryContext) {
        const keyRangeMap = new Map();
        Array.from(this.predicateMap.keys()).forEach(columnName => {
            const predicateIds = this.predicateMap.get(columnName);
            const predicates = predicateIds.map(predicateId => {
                return queryContext.getPredicate(predicateId);
            }, this);
            let keyRangeSetSoFar = new SingleKeyRangeSet([SingleKeyRange.all()]);
            predicates.forEach(predicate => {
                keyRangeSetSoFar = SingleKeyRangeSet.intersect(keyRangeSetSoFar, predicate.toKeyRange());
            });
            keyRangeMap.set(columnName, keyRangeSetSoFar);
        }, this);
        return keyRangeMap;
    }
    fillMissingKeyRanges(keyRangeMap) {
        const getAllKeyRange = () => new SingleKeyRangeSet([SingleKeyRange.all()]);
        for (let i = this.indexSchema.columns.length - 1; i >= 0; i--) {
            const column = this.indexSchema.columns[i];
            const keyRangeSet = keyRangeMap.get(column.schema.getName()) || null;
            if (keyRangeSet !== null) {
                break;
            }
            keyRangeMap.set(column.schema.getName(), getAllKeyRange());
        }
    }
    getSortedKeyRangeSets(keyRangeMap) {
        const sortHelper = new Map();
        let priority = 0;
        this.indexSchema.columns.forEach(column => {
            sortHelper.set(column.schema.getName(), priority);
            priority++;
        });
        const sortedColumnNames = Array.from(keyRangeMap.keys()).sort((a, b) => (sortHelper.get(a) || 0) - (sortHelper.get(b) || 0));
        return sortedColumnNames.map(columnName => keyRangeMap.get(columnName));
    }
    calculateCartesianProduct(keyRangeSets) {
        assert(keyRangeSets.length > 1, 'Should only be called for cross-column indices.');
        const keyRangeSetsAsArrays = keyRangeSets.map(keyRangeSet => keyRangeSet.getValues());
        return ArrayHelper.product(keyRangeSetsAsArrays);
    }
}
class IndexRangeCandidate {
    constructor(indexStore, indexSchema) {
        this.indexStore = indexStore;
        this.indexSchema = indexSchema;
        this.indexedColumnNames = new Set(this.indexSchema.columns.map(col => col.schema.getName()));
        this.predicateMap = null;
        this.keyRangeCalculator = null;
    }
    getPredicateIds() {
        return this.predicateMap ? this.predicateMap.values() : [];
    }
    getKeyRangeCalculator() {
        assert(this.predicateMap !== null);
        if (this.keyRangeCalculator === null) {
            this.keyRangeCalculator = new BoundedKeyRangeCalculator(this.indexSchema, this.predicateMap);
        }
        return this.keyRangeCalculator;
    }
    consumePredicates(predicates) {
        predicates.forEach(predicate => {
            const columnName = predicate.getColumns()[0].getName();
            if (this.indexedColumnNames.has(columnName)) {
                if (this.predicateMap === null) {
                    this.predicateMap = new MapSet();
                }
                this.predicateMap.set(columnName, predicate.getId());
            }
        }, this);
    }
    isUsable() {
        if (this.predicateMap === null) {
            return false;
        }
        let unboundColumnFound = false;
        let isUsable = true;
        this.indexSchema.columns.every(column => {
            const isBound = this.predicateMap.has(column.schema.getName());
            if (unboundColumnFound && isBound) {
                isUsable = false;
                return false;
            }
            if (!isBound) {
                unboundColumnFound = true;
            }
            return true;
        }, this);
        return isUsable;
    }
    calculateCost(queryContext) {
        const combinations = this.getKeyRangeCalculator().getKeyRangeCombinations(queryContext);
        const indexData = this.indexStore.get(this.indexSchema.getNormalizedName());
        return combinations.reduce((costSoFar, combination) => {
            return costSoFar + indexData.cost(combination);
        }, 0);
    }
}
const INDEX_QUERY_THRESHOLD_PERCENT = 0.02;
class IndexCostEstimator {
    constructor(global, tableSchema) {
        this.tableSchema = tableSchema;
        this.indexStore = global.getService(Service.INDEX_STORE);
    }
    chooseIndexFor(queryContext, predicates) {
        const candidatePredicates = predicates.filter(this.isCandidate, this);
        if (candidatePredicates.length === 0) {
            return null;
        }
        const indexRangeCandidates = this.generateIndexRangeCandidates(candidatePredicates);
        if (indexRangeCandidates.length === 0) {
            return null;
        }
        if (indexRangeCandidates.length === 1) {
            return indexRangeCandidates[0];
        }
        let minCost = Number.MAX_VALUE;
        return indexRangeCandidates.reduce((prev, curr) => {
            const cost = curr.calculateCost(queryContext);
            if (cost < minCost) {
                minCost = cost;
                return curr;
            }
            return prev;
        }, null);
    }
    getIndexQueryThreshold() {
        const rowIdIndex = this.indexStore.get(this.tableSchema.getRowIdIndexName());
        return Math.floor(rowIdIndex.stats().totalRows * INDEX_QUERY_THRESHOLD_PERCENT);
    }
    generateIndexRangeCandidates(predicates) {
        const indexSchemas = this.tableSchema.getIndices();
        return indexSchemas
            .map(indexSchema => {
            const indexRangeCandidate = new IndexRangeCandidate(this.indexStore, indexSchema);
            indexRangeCandidate.consumePredicates(predicates);
            return indexRangeCandidate;
        }, this)
            .filter(indexRangeCandidate => indexRangeCandidate.isUsable());
    }
    isCandidate(predicate) {
        if (predicate instanceof ValuePredicate) {
            return this.isCandidateValuePredicate(predicate);
        }
        else if (predicate instanceof CombinedPredicate) {
            return this.isCandidateCombinedPredicate(predicate);
        }
        else {
            return false;
        }
    }
    isCandidateCombinedPredicate(predicate) {
        if (!predicate.isKeyRangeCompatible()) {
            return false;
        }
        const predicateColumn = predicate.getChildAt(0).column;
        if (predicateColumn.getTable() !== this.tableSchema) {
            return false;
        }
        return predicate.getChildCount() <= this.getIndexQueryThreshold();
    }
    isCandidateValuePredicate(predicate) {
        if (!predicate.isKeyRangeCompatible() ||
            predicate.column.getTable() !== this.tableSchema) {
            return false;
        }
        if (predicate.evaluatorType === EvalType.IN &&
            predicate.peek().length > this.getIndexQueryThreshold()) {
            return false;
        }
        return true;
    }
}
class IndexRangeScanStep extends PhysicalQueryPlanNode {
    constructor(global, index, keyRangeCalculator, reverseOrder) {
        super(0, ExecType.NO_CHILD);
        this.index = index;
        this.keyRangeCalculator = keyRangeCalculator;
        this.reverseOrder = reverseOrder;
        this.indexStore = global.getService(Service.INDEX_STORE);
        this.useLimit = false;
        this.useSkip = false;
    }
    toString() {
        return (`index_range_scan(${this.index.getNormalizedName()}, ?, ` +
            (this.reverseOrder ? 'reverse' : 'natural') +
            (this.useLimit ? ', limit:?' : '') +
            (this.useSkip ? ', skip:?' : '') +
            ')');
    }
    toContextString(context) {
        let results = this.toString();
        const keyRanges = this.keyRangeCalculator.getKeyRangeCombinations(context);
        results = results.replace('?', keyRanges.toString());
        if (this.useLimit) {
            results = results.replace('?', context.limit.toString());
        }
        if (this.useSkip) {
            results = results.replace('?', context.skip.toString());
        }
        return results;
    }
    execInternal(relations, journal, ctx) {
        const context = ctx;
        const keyRanges = this.keyRangeCalculator.getKeyRangeCombinations(context);
        const index = this.indexStore.get(this.index.getNormalizedName());
        let rowIds;
        if (keyRanges.length === 1 &&
            keyRanges[0] instanceof SingleKeyRange &&
            keyRanges[0].isOnly()) {
            rowIds = IndexHelper.slice(index.get(keyRanges[0].from), false, this.useLimit ? context.limit : undefined, this.useSkip ? context.skip : undefined);
        }
        else {
            rowIds = index.getRange(keyRanges, this.reverseOrder, this.useLimit ? context.limit : undefined, this.useSkip ? context.skip : undefined);
        }
        const rows = rowIds.map(rowId => new Row(rowId, {}));
        return [Relation.fromRows(rows, [this.index.tableName])];
    }
}
class SelectStep extends PhysicalQueryPlanNode {
    constructor(predicateId) {
        super(1, ExecType.FIRST_CHILD);
        this.predicateId = predicateId;
    }
    toString() {
        return 'select(?)';
    }
    toContextString(context) {
        const predicate = context.getPredicate(this.predicateId);
        return this.toString().replace('?', predicate.toString());
    }
    execInternal(relations, journal, context) {
        const predicate = context.getPredicate(this.predicateId);
        return [predicate.eval(relations[0])];
    }
}
class TableAccessByRowIdStep extends PhysicalQueryPlanNode {
    constructor(global, table) {
        super(1, ExecType.FIRST_CHILD);
        this.table = table;
        this.cache = global.getService(Service.CACHE);
    }
    toString() {
        return `table_access_by_row_id(${this.table.getName()})`;
    }
    execInternal(relations, journal, ctx) {
        return [
            Relation.fromRows(this.cache.getMany(relations[0].getRowIds()), [
                this.table.getEffectiveName(),
            ]),
        ];
    }
}
class IndexRangeScanPass extends RewritePass {
    constructor(global) {
        super();
        this.global = global;
    }
    rewrite(rootNode, queryContext) {
        this.rootNode = rootNode;
        const tableAccessFullSteps = TreeHelper.find(rootNode, node => node instanceof TableAccessFullStep);
        tableAccessFullSteps.forEach(tableAccessFullStep => {
            const selectStepsCandidates = this.findSelectSteps(tableAccessFullStep);
            if (selectStepsCandidates.length === 0) {
                return;
            }
            const costEstimator = new IndexCostEstimator(this.global, tableAccessFullStep.table);
            const indexRangeCandidate = costEstimator.chooseIndexFor(queryContext, selectStepsCandidates.map(c => queryContext.getPredicate(c.predicateId)));
            if (indexRangeCandidate === null) {
                return;
            }
            const predicateToSelectStepMap = new Map();
            selectStepsCandidates.forEach(selectStep => {
                predicateToSelectStepMap.set(selectStep.predicateId, selectStep);
            }, this);
            this.rootNode = this.replaceWithIndexRangeScanStep(indexRangeCandidate, predicateToSelectStepMap, tableAccessFullStep);
        }, this);
        return this.rootNode;
    }
    findSelectSteps(startNode) {
        const selectSteps = [];
        let node = startNode.getParent();
        while (node) {
            if (node instanceof SelectStep) {
                selectSteps.push(node);
            }
            else if (node instanceof JoinStep) {
                break;
            }
            node = node.getParent();
        }
        return selectSteps;
    }
    replaceWithIndexRangeScanStep(indexRangeCandidate, predicateToSelectStepMap, tableAccessFullStep) {
        const predicateIds = indexRangeCandidate.getPredicateIds();
        const selectSteps = predicateIds.map(predicateId => {
            return predicateToSelectStepMap.get(predicateId);
        });
        selectSteps.forEach(TreeHelper.removeNode);
        const indexRangeScanStep = new IndexRangeScanStep(this.global, indexRangeCandidate.indexSchema, indexRangeCandidate.getKeyRangeCalculator(), false);
        const tableAccessByRowIdStep = new TableAccessByRowIdStep(this.global, tableAccessFullStep.table);
        tableAccessByRowIdStep.addChild(indexRangeScanStep);
        TreeHelper.replaceNodeWithChain(tableAccessFullStep, tableAccessByRowIdStep, indexRangeScanStep);
        return indexRangeScanStep.getRoot();
    }
}
class InsertStep extends PhysicalQueryPlanNode {
    static assignAutoIncrementPks(t, values, indexStore) {
        const table = t;
        const pkIndexSchema = table.getConstraint().getPrimaryKey();
        const autoIncrement = pkIndexSchema === null ? false : pkIndexSchema.columns[0].autoIncrement;
        if (autoIncrement) {
            const pkColumnName = pkIndexSchema.columns[0].schema.getName();
            const index = indexStore.get(pkIndexSchema.getNormalizedName());
            const max = index.stats().maxKeyEncountered;
            let maxKey = max === null ? 0 : max;
            values.forEach(row => {
                const val = row.payload()[pkColumnName];
                if (val === 0 || val === null || val === undefined) {
                    maxKey++;
                    row.payload()[pkColumnName] = maxKey;
                }
            });
        }
    }
    constructor(global, table) {
        super(0, ExecType.NO_CHILD);
        this.table = table;
        this.indexStore = global.getService(Service.INDEX_STORE);
    }
    toString() {
        return `insert(${this.table.getName()})`;
    }
    execInternal(relations, journal, queryContext) {
        const values = queryContext.values;
        InsertStep.assignAutoIncrementPks(this.table, values, this.indexStore);
        journal.insert(this.table, values);
        return [Relation.fromRows(values, [this.table.getName()])];
    }
}
class InsertOrReplaceStep extends PhysicalQueryPlanNode {
    constructor(global, table) {
        super(0, ExecType.NO_CHILD);
        this.table = table;
        this.indexStore = global.getService(Service.INDEX_STORE);
    }
    toString() {
        return `insert_replace(${this.table.getName()})`;
    }
    execInternal(relations, journal, ctx) {
        const queryContext = ctx;
        InsertStep.assignAutoIncrementPks(this.table, queryContext.values, this.indexStore);
        journal.insertOrReplace(this.table, queryContext.values);
        return [Relation.fromRows(queryContext.values, [this.table.getName()])];
    }
}
class LimitStep extends PhysicalQueryPlanNode {
    constructor() {
        super(1, ExecType.FIRST_CHILD);
    }
    toString() {
        return 'limit(?)';
    }
    toContextString(context) {
        return this.toString().replace('?', context.limit.toString());
    }
    execInternal(relations, journal, context) {
        relations[0].entries.splice(context.limit);
        return relations;
    }
}
class OrderByStep extends PhysicalQueryPlanNode {
    constructor(orderBy) {
        super(PhysicalQueryPlanNode.ANY, ExecType.FIRST_CHILD);
        this.orderBy = orderBy;
    }
    toString() {
        return `order_by(${SelectContext.orderByToString(this.orderBy)})`;
    }
    execInternal(relations, journal, context) {
        if (relations.length === 1) {
            const distinctColumn = this.findDistinctColumn(relations[0]);
            const relationToSort = distinctColumn === null
                ? relations[0]
                : relations[0].getAggregationResult(distinctColumn);
            relationToSort.entries.sort(this.entryComparatorFn.bind(this));
        }
        else {
            relations.sort(this.relationComparatorFn.bind(this));
        }
        return relations;
    }
    findDistinctColumn(relation) {
        let distinctColumn = null;
        this.orderBy.every(entry => {
            const tempDistinctColumn = fn.distinct(entry.column);
            if (relation.hasAggregationResult(tempDistinctColumn)) {
                distinctColumn = tempDistinctColumn;
                return false;
            }
            return true;
        }, this);
        return distinctColumn;
    }
    comparator(getLeftPayload, getRightPayload) {
        let order;
        let leftPayload = null;
        let rightPayload = null;
        let comparisonIndex = -1;
        do {
            comparisonIndex++;
            const column = this.orderBy[comparisonIndex].column;
            order = this.orderBy[comparisonIndex].order;
            leftPayload = getLeftPayload(column);
            rightPayload = getRightPayload(column);
        } while (leftPayload === rightPayload &&
            comparisonIndex + 1 < this.orderBy.length);
        let result = leftPayload < rightPayload ? -1 : leftPayload > rightPayload ? 1 : 0;
        result = order === Order.ASC ? result : -result;
        return result;
    }
    entryComparatorFn(lhs, rhs) {
        return this.comparator(column => lhs.getField(column), column => rhs.getField(column));
    }
    relationComparatorFn(lhs, rhs) {
        return this.comparator(column => {
            return (column instanceof AggregatedColumn
                ? lhs.getAggregationResult(column)
                : lhs.entries[lhs.entries.length - 1].getField(column));
        }, column => {
            return (column instanceof AggregatedColumn
                ? rhs.getAggregationResult(column)
                : rhs.entries[rhs.entries.length - 1].getField(column));
        });
    }
}
class RelationTransformer {
    static transformMany(relations, columns) {
        const entries = relations.map(relation => {
            const relationTransformer = new RelationTransformer(relation, columns);
            const singleEntryRelation = relationTransformer.getTransformed();
            return singleEntryRelation.entries[0];
        });
        return new Relation(entries, relations[0].getTables());
    }
    constructor(relation, columns) {
        this.relation = relation;
        this.columns = columns;
    }
    getTransformed() {
        const aggregatedColumnsExist = this.columns.some(column => column instanceof AggregatedColumn);
        return aggregatedColumnsExist
            ? this.handleAggregatedColumns()
            : this.handleNonAggregatedColumns();
    }
    handleAggregatedColumns() {
        if (this.columns.length === 1 &&
            this.columns[0].aggregatorType === FnType.DISTINCT) {
            const distinctRelation = this.relation.getAggregationResult(this.columns[0]);
            const newEntries = distinctRelation.entries.map(e => {
                const newEntry = new RelationEntry(new Row(Row.DUMMY_ID, {}), this.relation.isPrefixApplied());
                newEntry.setField(this.columns[0], e.getField(this.columns[0].child));
                return newEntry;
            }, this);
            return new Relation(newEntries, []);
        }
        const entry = new RelationEntry(new Row(Row.DUMMY_ID, {}), this.relation.isPrefixApplied());
        this.columns.forEach(column => {
            const value = column instanceof AggregatedColumn
                ? this.relation.getAggregationResult(column)
                : this.relation.entries[0].getField(column);
            entry.setField(column, value);
        }, this);
        return new Relation([entry], this.relation.getTables());
    }
    handleNonAggregatedColumns() {
        const transformedEntries = new Array(this.relation.entries.length);
        const isPrefixApplied = this.relation.isPrefixApplied();
        this.relation.entries.forEach((entry, index) => {
            transformedEntries[index] = new RelationEntry(new Row(entry.row.id(), {}), isPrefixApplied);
            this.columns.forEach(column => {
                transformedEntries[index].setField(column, entry.getField(column));
            }, this);
        }, this);
        return new Relation(transformedEntries, this.relation.getTables());
    }
}
class ProjectStep extends PhysicalQueryPlanNode {
    constructor(columns, groupByColumns) {
        super(PhysicalQueryPlanNode.ANY, ExecType.FIRST_CHILD);
        this.columns = columns;
        this.groupByColumns = groupByColumns;
    }
    toString() {
        let postfix = '';
        if (this.groupByColumns) {
            const groupBy = this.groupByColumns
                .map(col => col.getNormalizedName())
                .join(', ');
            postfix = `, groupBy(${groupBy})`;
        }
        return `project(${this.columns.toString()}${postfix})`;
    }
    execInternal(relations, journal, context) {
        if (relations.length === 0) {
            return [Relation.createEmpty()];
        }
        else if (relations.length === 1) {
            return [this.execNonGroupByProjection(relations[0])];
        }
        else {
            return [this.execGroupByProjection(relations)];
        }
    }
    hasAggregators() {
        const hasAggregators = this.columns.some(column => {
            return column instanceof AggregatedColumn;
        });
        return hasAggregators || this.groupByColumns !== null;
    }
    execGroupByProjection(relations) {
        return RelationTransformer.transformMany(relations, this.columns);
    }
    execNonGroupByProjection(relation) {
        if (this.columns.length === 0) {
            return relation;
        }
        const relationTransformer = new RelationTransformer(relation, this.columns);
        return relationTransformer.getTransformed();
    }
}
class SkipStep extends PhysicalQueryPlanNode {
    constructor() {
        super(1, ExecType.FIRST_CHILD);
    }
    toString() {
        return 'skip(?)';
    }
    toContextString(context) {
        return this.toString().replace('?', context.skip.toString());
    }
    execInternal(relations, journal, context) {
        return [
            new Relation(relations[0].entries.slice(context.skip), relations[0].getTables()),
        ];
    }
}
class LimitSkipByIndexPass extends RewritePass {
    constructor() {
        super();
    }
    rewrite(rootNode, queryContext) {
        if (queryContext.limit === undefined && queryContext.skip === undefined) {
            return rootNode;
        }
        const indexRangeScanStep = this.findIndexRangeScanStep(rootNode);
        if (indexRangeScanStep === null) {
            return rootNode;
        }
        const nodes = TreeHelper.find(rootNode, node => node instanceof LimitStep || node instanceof SkipStep);
        nodes.forEach(node => {
            this.mergeToIndexRangeScanStep(node, indexRangeScanStep);
        }, this);
        return indexRangeScanStep.getRoot();
    }
    mergeToIndexRangeScanStep(node, indexRangeScanStep) {
        if (node instanceof LimitStep) {
            indexRangeScanStep.useLimit = true;
        }
        else {
            indexRangeScanStep.useSkip = true;
        }
        return TreeHelper.removeNode(node).parent;
    }
    findIndexRangeScanStep(rootNode) {
        const filterFn = (node) => {
            return node instanceof IndexRangeScanStep;
        };
        const stopFn = (node) => {
            const hasAggregators = node instanceof ProjectStep && node.hasAggregators();
            return (hasAggregators ||
                node instanceof OrderByStep ||
                node.getChildCount() !== 1 ||
                node instanceof SelectStep);
        };
        const indexRangeScanSteps = TreeHelper.find(rootNode, filterFn, stopFn);
        return indexRangeScanSteps.length > 0 ? indexRangeScanSteps[0] : null;
    }
}
class MultiIndexRangeScanStep extends PhysicalQueryPlanNode {
    constructor() {
        super(PhysicalQueryPlanNode.ANY, ExecType.ALL);
    }
    toString() {
        return 'multi_index_range_scan()';
    }
    execInternal(relations, journal, ctx) {
        const entriesUnion = new Map();
        relations.forEach(relation => {
            relation.entries.forEach(entry => {
                entriesUnion.set(entry.row.id(), entry);
            });
        });
        const entries = Array.from(entriesUnion.values());
        return [new Relation(entries, relations[0].getTables())];
    }
}
class MultiColumnOrPass extends RewritePass {
    constructor(global) {
        super();
        this.global = global;
    }
    rewrite(rootNode, queryContext) {
        this.rootNode = rootNode;
        const orSelectSteps = this.findOrPredicates(queryContext);
        if (orSelectSteps.length === 0) {
            return this.rootNode;
        }
        let indexRangeCandidates = null;
        let orSelectStep = null;
        let i = 0;
        do {
            orSelectStep = orSelectSteps[i++];
            indexRangeCandidates = this.findIndexRangeCandidates(orSelectStep, queryContext);
        } while (indexRangeCandidates === null && i < orSelectSteps.length);
        if (indexRangeCandidates === null) {
            return this.rootNode;
        }
        const tableAccessFullStep = this.findTableAccessFullStep(indexRangeCandidates[0].indexSchema.tableName);
        if (tableAccessFullStep === null) {
            return this.rootNode;
        }
        this.rootNode = this.replaceWithIndexRangeScan(orSelectStep, tableAccessFullStep, indexRangeCandidates);
        return this.rootNode;
    }
    findOrPredicates(queryContext) {
        const filterFn = (node) => {
            if (!(node instanceof SelectStep)) {
                return false;
            }
            const predicate = queryContext.getPredicate(node.predicateId);
            return (predicate instanceof CombinedPredicate &&
                predicate.operator === Operator.OR);
        };
        return TreeHelper.find(this.rootNode, filterFn);
    }
    findTableAccessFullStep(tableName) {
        return (TreeHelper.find(this.rootNode, node => node instanceof TableAccessFullStep &&
            node.table.getName() === tableName)[0] || null);
    }
    findIndexRangeCandidates(selectStep, queryContext) {
        const predicate = queryContext.getPredicate(selectStep.predicateId);
        const tables = predicate.getTables();
        if (tables.size !== 1) {
            return null;
        }
        const tableSchema = Array.from(tables.values())[0];
        const indexCostEstimator = new IndexCostEstimator(this.global, tableSchema);
        let indexRangeCandidates = null;
        const allIndexed = predicate.getChildren().every(childPredicate => {
            const indexRangeCandidate = indexCostEstimator.chooseIndexFor(queryContext, [childPredicate]);
            if (indexRangeCandidate !== null) {
                indexRangeCandidates === null
                    ? (indexRangeCandidates = [indexRangeCandidate])
                    : indexRangeCandidates.push(indexRangeCandidate);
            }
            return indexRangeCandidate !== null;
        });
        return allIndexed ? indexRangeCandidates : null;
    }
    replaceWithIndexRangeScan(selectStep, tableAccessFullStep, indexRangeCandidates) {
        const tableAccessByRowIdStep = new TableAccessByRowIdStep(this.global, tableAccessFullStep.table);
        const multiIndexRangeScanStep = new MultiIndexRangeScanStep();
        tableAccessByRowIdStep.addChild(multiIndexRangeScanStep);
        indexRangeCandidates.forEach(candidate => {
            const indexRangeScanStep = new IndexRangeScanStep(this.global, candidate.indexSchema, candidate.getKeyRangeCalculator(), false);
            multiIndexRangeScanStep.addChild(indexRangeScanStep);
        }, this);
        TreeHelper.removeNode(selectStep);
        TreeHelper.replaceNodeWithChain(tableAccessFullStep, tableAccessByRowIdStep, multiIndexRangeScanStep);
        return multiIndexRangeScanStep.getRoot();
    }
}
class UnboundedKeyRangeCalculator {
    constructor(indexSchema) {
        this.indexSchema = indexSchema;
    }
    getKeyRangeCombinations(queryContext) {
        return this.indexSchema.columns.length === 1
            ? [SingleKeyRange.all()]
            : [this.indexSchema.columns.map(() => SingleKeyRange.all())];
    }
}
class OrderByIndexPass extends RewritePass {
    constructor(global) {
        super();
        this.global = global;
    }
    rewrite(rootNode, queryContext) {
        const orderByStep = this.findOrderByStep(rootNode, queryContext);
        if (orderByStep === null) {
            return rootNode;
        }
        let newSubtreeRoot = this.applyTableAccessFullOptimization(orderByStep);
        if (newSubtreeRoot === orderByStep) {
            newSubtreeRoot = this.applyIndexRangeScanStepOptimization(orderByStep);
        }
        return newSubtreeRoot.getRoot();
    }
    applyTableAccessFullOptimization(orderByStep) {
        let rootNode = orderByStep;
        const tableAccessFullStep = this.findTableAccessFullStep(orderByStep.getChildAt(0));
        if (tableAccessFullStep !== null) {
            const indexRangeCandidate = this.findIndexCandidateForOrderBy(tableAccessFullStep.table, orderByStep.orderBy);
            if (indexRangeCandidate === null) {
                return rootNode;
            }
            const indexRangeScanStep = new IndexRangeScanStep(this.global, indexRangeCandidate.indexSchema, new UnboundedKeyRangeCalculator(indexRangeCandidate.indexSchema), indexRangeCandidate.isReverse);
            const tableAccessByRowIdStep = new TableAccessByRowIdStep(this.global, tableAccessFullStep.table);
            tableAccessByRowIdStep.addChild(indexRangeScanStep);
            TreeHelper.removeNode(orderByStep);
            rootNode = TreeHelper.replaceNodeWithChain(tableAccessFullStep, tableAccessByRowIdStep, indexRangeScanStep);
        }
        return rootNode;
    }
    applyIndexRangeScanStepOptimization(orderByStep) {
        let rootNode = orderByStep;
        const indexRangeScanStep = this.findIndexRangeScanStep(orderByStep.getChildAt(0));
        if (indexRangeScanStep !== null) {
            const indexRangeCandidate = this.getIndexCandidateForIndexSchema(indexRangeScanStep.index, orderByStep.orderBy);
            if (indexRangeCandidate === null) {
                return rootNode;
            }
            indexRangeScanStep.reverseOrder = indexRangeCandidate.isReverse;
            rootNode = TreeHelper.removeNode(orderByStep)
                .parent;
        }
        return rootNode;
    }
    findIndexRangeScanStep(rootNode) {
        const filterFn = (node) => node instanceof IndexRangeScanStep;
        const stopFn = (node) => node.getChildCount() !== 1;
        const indexRangeScanSteps = TreeHelper.find(rootNode, filterFn, stopFn);
        return indexRangeScanSteps.length > 0 ? indexRangeScanSteps[0] : null;
    }
    findTableAccessFullStep(rootNode) {
        const filterFn = (node) => node instanceof TableAccessFullStep;
        const stopFn = (node) => node.getChildCount() !== 1;
        const tableAccessFullSteps = TreeHelper.find(rootNode, filterFn, stopFn);
        return tableAccessFullSteps.length > 0 ? tableAccessFullSteps[0] : null;
    }
    findOrderByStep(rootNode, queryContext) {
        if (queryContext.orderBy === undefined) {
            return null;
        }
        return TreeHelper.find(rootNode, node => node instanceof OrderByStep)[0];
    }
    findIndexCandidateForOrderBy(tableSchema, orderBy) {
        let indexCandidate = null;
        const indexSchemas = tableSchema.getIndices();
        for (let i = 0; i < indexSchemas.length && indexCandidate === null; i++) {
            indexCandidate = this.getIndexCandidateForIndexSchema(indexSchemas[i], orderBy);
        }
        return indexCandidate;
    }
    getIndexCandidateForIndexSchema(indexSchema, orderBy) {
        const columnsMatch = indexSchema.columns.length === orderBy.length &&
            orderBy.every((singleOrderBy, j) => {
                const indexedColumn = indexSchema.columns[j];
                return (singleOrderBy.column.getName() === indexedColumn.schema.getName());
            });
        if (!columnsMatch) {
            return null;
        }
        const isNaturalOrReverse = this.checkOrder(orderBy, indexSchema);
        if (!isNaturalOrReverse[0] && !isNaturalOrReverse[1]) {
            return null;
        }
        return {
            indexSchema,
            isReverse: isNaturalOrReverse[1],
        };
    }
    checkOrder(orderBy, indexSchema) {
        const ordersLeftBitmask = orderBy.reduce((soFar, columnOrderBy) => {
            return (soFar << 1) | (columnOrderBy.order === Order.DESC ? 0 : 1);
        }, 0);
        const ordersRightBitmask = indexSchema.columns.reduce((soFar, indexedColumn) => {
            return (soFar << 1) | (indexedColumn.order === Order.DESC ? 0 : 1);
        }, 0);
        const xorBitmask = ordersLeftBitmask ^ ordersRightBitmask;
        const isNatural = xorBitmask === 0;
        const isReverse = xorBitmask ===
            Math.pow(2, Math.max(orderBy.length, indexSchema.columns.length)) - 1;
        return [isNatural, isReverse];
    }
}
class PhysicalPlanRewriter {
    constructor(rootNode, queryContext, rewritePasses) {
        this.rootNode = rootNode;
        this.queryContext = queryContext;
        this.rewritePasses = rewritePasses;
    }
    generate() {
        this.rewritePasses.forEach(rewritePass => {
            this.rootNode = rewritePass.rewrite(this.rootNode, this.queryContext);
        }, this);
        return this.rootNode;
    }
}
class UpdateStep extends PhysicalQueryPlanNode {
    constructor(table) {
        super(1, ExecType.FIRST_CHILD);
        this.table = table;
    }
    toString() {
        return `update(${this.table.getName()})`;
    }
    execInternal(relations, journal, context) {
        const table = this.table;
        const rows = relations[0].entries.map(entry => {
            const clone = table.deserializeRow(entry.row.serialize());
            context.set.forEach(update => {
                clone.payload()[update.column.getName()] = update.value;
            }, this);
            return clone;
        }, this);
        journal.update(table, rows);
        return [Relation.createEmpty()];
    }
}
class PhysicalPlanFactory {
    constructor(global) {
        this.global = global;
        this.selectOptimizationPasses = [
            new IndexJoinPass(),
            new IndexRangeScanPass(global),
            new MultiColumnOrPass(global),
            new OrderByIndexPass(global),
            new LimitSkipByIndexPass(),
            new GetRowCountPass(global),
        ];
        this.deleteOptimizationPasses = [new IndexRangeScanPass(global)];
    }
    create(logicalQueryPlan, queryContext) {
        const logicalQueryPlanRoot = logicalQueryPlan.getRoot();
        if (logicalQueryPlanRoot instanceof InsertOrReplaceNode ||
            logicalQueryPlanRoot instanceof InsertNode) {
            return this.createPlan(logicalQueryPlan, queryContext);
        }
        if (logicalQueryPlanRoot instanceof ProjectNode ||
            logicalQueryPlanRoot instanceof LimitNode ||
            logicalQueryPlanRoot instanceof SkipNode) {
            return this.createPlan(logicalQueryPlan, queryContext, this.selectOptimizationPasses);
        }
        if (logicalQueryPlanRoot instanceof DeleteNode ||
            logicalQueryPlanRoot instanceof UpdateNode) {
            return this.createPlan(logicalQueryPlan, queryContext, this.deleteOptimizationPasses);
        }
        throw new Exception(ErrorCode.UNKNOWN_PLAN_NODE);
    }
    createPlan(logicalPlan, queryContext, rewritePasses) {
        let rootStep = TreeHelper.map(logicalPlan.getRoot(), this.mapFn.bind(this));
        if (rewritePasses !== undefined && rewritePasses !== null) {
            const planRewriter = new PhysicalPlanRewriter(rootStep, queryContext, rewritePasses);
            rootStep = planRewriter.generate();
        }
        return new PhysicalQueryPlan(rootStep, logicalPlan.getScope());
    }
    mapFn(node) {
        if (node instanceof ProjectNode) {
            return new ProjectStep(node.columns, node.groupByColumns);
        }
        else if (node instanceof GroupByNode) {
            return new GroupByStep(node.columns);
        }
        else if (node instanceof AggregationNode) {
            return new AggregationStep(node.columns);
        }
        else if (node instanceof OrderByNode) {
            return new OrderByStep(node.orderBy);
        }
        else if (node instanceof SkipNode) {
            return new SkipStep();
        }
        else if (node instanceof LimitNode) {
            return new LimitStep();
        }
        else if (node instanceof SelectNode) {
            return new SelectStep(node.predicate.getId());
        }
        else if (node instanceof CrossProductNode) {
            return new CrossProductStep();
        }
        else if (node instanceof JoinNode) {
            return new JoinStep(this.global, node.predicate, node.isOuterJoin);
        }
        else if (node instanceof TableAccessNode) {
            return new TableAccessFullStep(this.global, node.table);
        }
        else if (node instanceof DeleteNode) {
            return new DeleteStep(node.table);
        }
        else if (node instanceof UpdateNode) {
            return new UpdateStep(node.table);
        }
        else if (node instanceof InsertOrReplaceNode) {
            return new InsertOrReplaceStep(this.global, node.table);
        }
        else if (node instanceof InsertNode) {
            return new InsertStep(this.global, node.table);
        }
        throw new Exception(ErrorCode.UNKNOWN_NODE_TYPE);
    }
}
class DefaultQueryEngine {
    constructor(global) {
        this.logicalPlanFactory = new LogicalPlanFactory();
        this.physicalPlanFactory = new PhysicalPlanFactory(global);
    }
    getPlan(query) {
        const logicalQueryPlan = this.logicalPlanFactory.create(query);
        return this.physicalPlanFactory.create(logicalQueryPlan, query);
    }
}
class ExportTask extends UniqueId {
    constructor(global) {
        super();
        this.global = global;
        this.schema = global.getService(Service.SCHEMA);
        this.scope = new Set(this.schema.tables());
        this.resolver = new Resolver();
    }
    execSync() {
        const indexStore = this.global.getService(Service.INDEX_STORE);
        const cache = this.global.getService(Service.CACHE);
        const tables = {};
        this.schema.tables().forEach(table => {
            const rowIds = indexStore.get(table.getRowIdIndexName()).getRange();
            const payloads = cache.getMany(rowIds).map(row => row.payload());
            tables[table.getName()] = payloads;
        });
        return {
            name: this.schema.name(),
            tables,
            version: this.schema.version(),
        };
    }
    exec() {
        const results = this.execSync();
        const entry = new RelationEntry(new Row(Row.DUMMY_ID, results), true);
        return Promise.resolve([new Relation([entry], [])]);
    }
    getType() {
        return TransactionType.READ_ONLY;
    }
    getScope() {
        return this.scope;
    }
    getResolver() {
        return this.resolver;
    }
    getId() {
        return this.getUniqueNumber();
    }
    getPriority() {
        return TaskPriority.EXPORT_TASK;
    }
}
class ImportTask extends UniqueId {
    constructor(global, data) {
        super();
        this.global = global;
        this.data = data;
        this.schema = global.getService(Service.SCHEMA);
        this.scope = new Set(this.schema.tables());
        this.resolver = new Resolver();
        this.backStore = global.getService(Service.BACK_STORE);
        this.cache = global.getService(Service.CACHE);
        this.indexStore = global.getService(Service.INDEX_STORE);
    }
    exec() {
        if (!this.backStore.supportsImport()) {
            throw new Exception(ErrorCode.NOT_SUPPORTED);
        }
        if (!this.isEmptyDB()) {
            throw new Exception(ErrorCode.IMPORT_TO_NON_EMPTY_DB);
        }
        if (this.schema.name() !== this.data['name'] ||
            this.schema.version() !== this.data['version']) {
            throw new Exception(ErrorCode.DB_MISMATCH);
        }
        if (this.data['tables'] === undefined || this.data['tables'] === null) {
            throw new Exception(ErrorCode.IMPORT_DATA_NOT_FOUND);
        }
        return this.import();
    }
    getType() {
        return TransactionType.READ_WRITE;
    }
    getScope() {
        return this.scope;
    }
    getResolver() {
        return this.resolver;
    }
    getId() {
        return this.getUniqueNumber();
    }
    getPriority() {
        return TaskPriority.IMPORT_TASK;
    }
    isEmptyDB() {
        return this.schema.tables().every(t => {
            const table = t;
            const index = this.indexStore.get(table.getRowIdIndexName());
            if (index.stats().totalRows > 0) {
                return false;
            }
            return true;
        });
    }
    import() {
        const journal = new Journal(this.global, this.scope);
        const tx = this.backStore.createTx(this.getType(), Array.from(this.scope.values()), journal);
        Object.keys(this.data['tables']).forEach(tableName => {
            const tableSchema = this.schema.table(tableName);
            const payloads = this.data['tables'][tableName];
            const rows = payloads.map((value) => tableSchema.createRow(value));
            const table = tx.getTable(tableName, tableSchema.deserializeRow, TableType.DATA);
            this.cache.setMany(tableName, rows);
            const indices = this.indexStore.getTableIndices(tableName);
            rows.forEach(row => {
                indices.forEach(index => {
                    const key = row.keyOfIndex(index.getName());
                    index.add(key, row.id());
                });
            });
            table.put(rows);
        }, this);
        return tx.commit();
    }
}
export class Capability {
    static get() {
        if (Capability.instance === undefined) {
            Capability.instance = new Capability();
        }
        return Capability.instance;
    }
    constructor() {
        this.supported = false;
        this.indexedDb = false;
        this.webSql = false;
        this.localStorage = false;
        this.agent = '';
        this.browser = '';
        this.version = [];
        this.versionMap = new Map();
        this.detect();
    }
    getDetection() {
        return `${this.browser} ${this.version.join('.')}`;
    }
    detect() {
        if (!this.detectNodeJS()) {
            if (navigator) {
                this.agent = navigator.userAgent;
                this.detectBrowser();
            }
        }
    }
    convertVersion(version) {
        if (version === undefined) {
            return;
        }
        this.version = version.split('.').map(v => {
            let n = 0;
            try {
                n = Number(v);
            }
            catch (e) {
            }
            return n;
        });
    }
    detectNodeJS() {
        if (typeof process !== typeof undefined && process.version) {
            this.convertVersion(process.version.slice(1));
            this.supported = this.version[0] >= 7;
            this.browser = 'nodejs';
            this.indexedDb = false;
            this.webSql = false;
            return true;
        }
        return false;
    }
    detectBrowser() {
        if (this.isIE() || this.isAndroid()) {
            return;
        }
        this.localStorage = true;
        this.detectVersion();
        const checkSequence = [
            this.isEdge.bind(this),
            this.isFirefox.bind(this),
            this.isChrome.bind(this),
            this.isSafari.bind(this),
            this.isIOS.bind(this),
        ];
        checkSequence.some(fn => fn());
    }
    detectVersion() {
        const regex = new RegExp('(\\w[\\w ]+)' +
            '/' +
            '([^\\s]+)' +
            '\\s*' +
            '(?:\\((.*?)\\))?', 'g');
        let match = null;
        do {
            match = regex.exec(this.agent);
            if (match) {
                const version = match[0];
                this.versionMap.set(match[1], version.slice(version.indexOf('/') + 1));
            }
        } while (match);
    }
    isChrome() {
        let detected = false;
        if (this.agent.indexOf('Chrome') !== -1) {
            detected = true;
            this.convertVersion(this.versionMap.get('Chrome'));
        }
        else if (this.agent.indexOf('CriOS') !== -1) {
            detected = true;
            this.convertVersion(this.versionMap.get('CriOS'));
        }
        if (detected) {
            this.browser = 'chrome';
            this.supported = this.version[0] > 60;
            this.indexedDb = true;
            this.webSql = true;
            this.localStorage = true;
            return true;
        }
        return false;
    }
    isEdge() {
        if (this.agent.indexOf('Edge') !== -1) {
            this.browser = 'edge';
            this.supported = true;
            this.indexedDb = true;
            this.webSql = false;
            this.convertVersion(this.versionMap.get('Edge'));
            return true;
        }
        return false;
    }
    isFirefox() {
        if (this.agent.indexOf('Firefox') !== -1) {
            this.browser = 'firefox';
            this.convertVersion('Firefox');
            this.supported = this.version[0] > 60;
            this.indexedDb = true;
            this.webSql = false;
            this.localStorage = true;
            return true;
        }
        return false;
    }
    isIE() {
        if (this.agent.indexOf('Trident') !== -1 ||
            this.agent.indexOf('MSIE') !== -1) {
            this.browser = 'ie';
            return true;
        }
        return false;
    }
    isAndroid() {
        if (this.agent.indexOf('Android') !== -1 &&
            !this.isChrome() &&
            !this.isFirefox()) {
            this.browser = 'legacy_android';
            return true;
        }
        return false;
    }
    isSafari() {
        if (this.agent.indexOf('Safari') !== -1) {
            this.browser = 'safari';
            this.convertVersion(this.versionMap.get('Version'));
            this.supported = this.version[0] >= 10;
            this.indexedDb = this.supported;
            this.webSql = true;
            return true;
        }
        return false;
    }
    isIOS() {
        if (this.agent.indexOf('AppleWebKit') !== -1 &&
            (this.agent.indexOf('iPad') !== -1 || this.agent.indexOf('iPhone') !== -1)) {
            this.browser = 'ios_webview';
            this.convertVersion(this.versionMap.get('Version'));
            this.supported = this.version[0] >= 10;
            this.indexedDb = this.supported;
            this.webSql = true;
            return true;
        }
        return false;
    }
}
class DeleteBuilder extends BaseBuilder {
    constructor(global) {
        super(global, new DeleteContext(global.getService(Service.SCHEMA)));
    }
    from(table) {
        this.assertFromPreconditions();
        this.query.from = table;
        return this;
    }
    where(predicate) {
        this.assertWherePreconditions();
        this.query.where = predicate;
        return this;
    }
    assertExecPreconditions() {
        super.assertExecPreconditions();
        if (this.query.from === undefined || this.query.from === null) {
            throw new Exception(ErrorCode.INVALID_DELETE);
        }
    }
    assertFromPreconditions() {
        if (this.query.from) {
            throw new Exception(ErrorCode.DUPLICATE_FROM);
        }
    }
    assertWherePreconditions() {
        if (this.query.from === undefined || this.query.from === null) {
            throw new Exception(ErrorCode.FROM_AFTER_WHERE);
        }
        if (this.query.where) {
            throw new Exception(ErrorCode.DUPLICATE_WHERE);
        }
    }
}
class InsertBuilder extends BaseBuilder {
    constructor(global, allowReplace = false) {
        super(global, new InsertContext(global.getService(Service.SCHEMA)));
        this.query.allowReplace = allowReplace;
    }
    assertExecPreconditions() {
        super.assertExecPreconditions();
        const context = this.query;
        if (context.into === undefined ||
            context.into === null ||
            context.values === undefined ||
            context.values === null) {
            throw new Exception(ErrorCode.INVALID_INSERT);
        }
        if (context.allowReplace &&
            context.into.getConstraint().getPrimaryKey() === null) {
            throw new Exception(ErrorCode.INVALID_INSERT_OR_REPLACE);
        }
    }
    into(table) {
        this.assertIntoPreconditions();
        this.query.into = table;
        return this;
    }
    values(rows) {
        this.assertValuesPreconditions();
        if (rows instanceof Binder ||
            rows.some(r => r instanceof Binder)) {
            this.query.binder = rows;
        }
        else {
            this.query.values = rows;
        }
        return this;
    }
    assertIntoPreconditions() {
        if (this.query.into !== undefined && this.query.into !== null) {
            throw new Exception(ErrorCode.DUPLICATE_INTO);
        }
    }
    assertValuesPreconditions() {
        if (this.query.values !== undefined && this.query.values !== null) {
            throw new Exception(ErrorCode.DUPLICATE_VALUES);
        }
    }
}
class UpdateBuilder extends BaseBuilder {
    constructor(global, table) {
        super(global, new UpdateContext(global.getService(Service.SCHEMA)));
        this.query.table = table;
    }
    set(column, value) {
        const set = {
            binding: value instanceof Binder ? value.index : -1,
            column,
            value,
        };
        if (this.query.set) {
            this.query.set.push(set);
        }
        else {
            this.query.set = [set];
        }
        return this;
    }
    where(predicate) {
        this.assertWherePreconditions();
        this.query.where = predicate;
        return this;
    }
    assertExecPreconditions() {
        super.assertExecPreconditions();
        if (this.query.set === undefined || this.query.set === null) {
            throw new Exception(ErrorCode.INVALID_UPDATE);
        }
        const notBound = this.query.set.some(set => set.value instanceof Binder);
        if (notBound) {
            throw new Exception(ErrorCode.UNBOUND_VALUE);
        }
    }
    assertWherePreconditions() {
        if (this.query.where) {
            throw new Exception(ErrorCode.DUPLICATE_WHERE);
        }
    }
}
var TransactionState;
(function (TransactionState) {
    TransactionState[TransactionState["CREATED"] = 0] = "CREATED";
    TransactionState[TransactionState["ACQUIRING_SCOPE"] = 1] = "ACQUIRING_SCOPE";
    TransactionState[TransactionState["ACQUIRED_SCOPE"] = 2] = "ACQUIRED_SCOPE";
    TransactionState[TransactionState["EXECUTING_QUERY"] = 3] = "EXECUTING_QUERY";
    TransactionState[TransactionState["EXECUTING_AND_COMMITTING"] = 4] = "EXECUTING_AND_COMMITTING";
    TransactionState[TransactionState["COMMITTING"] = 5] = "COMMITTING";
    TransactionState[TransactionState["ROLLING_BACK"] = 6] = "ROLLING_BACK";
    TransactionState[TransactionState["FINALIZED"] = 7] = "FINALIZED";
})(TransactionState || (TransactionState = {}));
class StateTransition {
    static get() {
        if (!StateTransition.instance) {
            StateTransition.instance = new StateTransition();
        }
        return StateTransition.instance;
    }
    constructor() {
        this.map = new MapSet();
        const TS = TransactionState;
        this.map.set(TS.CREATED, TS.ACQUIRING_SCOPE);
        this.map.set(TS.CREATED, TS.EXECUTING_AND_COMMITTING);
        this.map.set(TS.ACQUIRING_SCOPE, TS.ACQUIRED_SCOPE);
        this.map.set(TS.ACQUIRED_SCOPE, TS.EXECUTING_QUERY);
        this.map.set(TS.ACQUIRED_SCOPE, TS.COMMITTING);
        this.map.set(TS.ACQUIRED_SCOPE, TS.ROLLING_BACK);
        this.map.set(TS.EXECUTING_QUERY, TS.ACQUIRED_SCOPE);
        this.map.set(TS.EXECUTING_QUERY, TS.FINALIZED);
        this.map.set(TS.EXECUTING_AND_COMMITTING, TS.FINALIZED);
        this.map.set(TS.COMMITTING, TS.FINALIZED);
        this.map.set(TS.ROLLING_BACK, TS.FINALIZED);
    }
    get(current) {
        return this.map.getSet(current);
    }
}
class TransactionTask extends UniqueId {
    constructor(global, scope) {
        super();
        this.global = global;
        this.backStore = global.getService(Service.BACK_STORE);
        this.runner = global.getService(Service.RUNNER);
        this.observerRegistry = global.getService(Service.OBSERVER_REGISTRY);
        this.scope = new Set(scope);
        this.journal = new Journal(this.global, this.scope);
        this.resolver = new Resolver();
        this.execResolver = new Resolver();
        this.acquireScopeResolver = new Resolver();
    }
    exec() {
        this.acquireScopeResolver.resolve();
        return this.execResolver.promise;
    }
    getType() {
        return TransactionType.READ_WRITE;
    }
    getScope() {
        return this.scope;
    }
    getResolver() {
        return this.resolver;
    }
    getId() {
        return this.getUniqueNumber();
    }
    getPriority() {
        return TaskPriority.TRANSACTION_TASK;
    }
    acquireScope() {
        this.runner.scheduleTask(this);
        return this.acquireScopeResolver.promise;
    }
    attachQuery(queryBuilder) {
        const taskItem = queryBuilder.getTaskItem();
        return taskItem.plan
            .getRoot()
            .exec(this.journal, taskItem.context)
            .then(relations => {
            return relations[0].getPayloads();
        }, e => {
            this.journal.rollback();
            this.execResolver.resolve();
            throw e;
        });
    }
    commit() {
        this.tx = this.backStore.createTx(this.getType(), Array.from(this.scope.values()), this.journal);
        this.tx.commit().then(() => {
            this.scheduleObserverTask();
            this.execResolver.resolve();
        }, e => {
            this.journal.rollback();
            this.execResolver.reject(e);
        });
        return this.resolver.promise;
    }
    rollback() {
        this.journal.rollback();
        this.execResolver.resolve();
        return this.resolver.promise;
    }
    stats() {
        let results = null;
        if (this.tx) {
            results = this.tx.stats();
        }
        return results === null ? TransactionStatsImpl.getDefault() : results;
    }
    scheduleObserverTask() {
        const items = this.observerRegistry.getTaskItemsForTables(Array.from(this.scope.values()));
        if (items.length !== 0) {
            const observerTask = new ObserverQueryTask(this.global, items);
            this.runner.scheduleTask(observerTask);
        }
    }
}
class RuntimeTransaction {
    constructor(global) {
        this.global = global;
        this.runner = global.getService(Service.RUNNER);
        this.task = null;
        this.state = TransactionState.CREATED;
        this.stateTransition = StateTransition.get();
    }
    exec(queryBuilders) {
        this.updateState(TransactionState.EXECUTING_AND_COMMITTING);
        const taskItems = [];
        try {
            queryBuilders.forEach(queryBuilder => {
                queryBuilder.assertExecPreconditions();
                taskItems.push(queryBuilder.getTaskItem());
            });
        }
        catch (e) {
            this.updateState(TransactionState.FINALIZED);
            return Promise.reject(e);
        }
        this.task = new UserQueryTask(this.global, taskItems);
        return this.runner.scheduleTask(this.task).then(results => {
            this.updateState(TransactionState.FINALIZED);
            return results.map(relation => relation.getPayloads());
        }, e => {
            this.updateState(TransactionState.FINALIZED);
            throw e;
        });
    }
    begin(scope) {
        this.updateState(TransactionState.ACQUIRING_SCOPE);
        this.task = new TransactionTask(this.global, scope);
        return this.task
            .acquireScope()
            .then(() => this.updateState(TransactionState.ACQUIRED_SCOPE));
    }
    attach(query) {
        this.updateState(TransactionState.EXECUTING_QUERY);
        try {
            query.assertExecPreconditions();
        }
        catch (e) {
            this.updateState(TransactionState.FINALIZED);
            return Promise.reject(e);
        }
        return this.task.attachQuery(query).then(result => {
            this.updateState(TransactionState.ACQUIRED_SCOPE);
            return result;
        }, e => {
            this.updateState(TransactionState.FINALIZED);
            throw e;
        });
    }
    commit() {
        this.updateState(TransactionState.COMMITTING);
        return this.task.commit().then(res => {
            this.updateState(TransactionState.FINALIZED);
            return res;
        });
    }
    rollback() {
        this.updateState(TransactionState.ROLLING_BACK);
        return this.task.rollback().then(res => {
            this.updateState(TransactionState.FINALIZED);
            return res;
        });
    }
    stats() {
        if (this.state !== TransactionState.FINALIZED) {
            throw new Exception(ErrorCode.INVALID_TX_ACCESS);
        }
        return this.task.stats();
    }
    updateState(newState) {
        const nextStates = this.stateTransition.get(this.state);
        if (!nextStates.has(newState)) {
            throw new Exception(ErrorCode.INVALID_TX_STATE, this.state.toString(), newState.toString());
        }
        else {
            this.state = newState;
        }
    }
}
class RuntimeDatabase {
    constructor(global) {
        this.global = global;
        this.schema = global.getService(Service.SCHEMA);
        this.isActive = false;
        this.observeExternalChanges = false;
    }
    init(options) {
        this.global.registerService(Service.SCHEMA, this.schema);
        this.global.registerService(Service.CACHE, new DefaultCache(this.schema));
        const backStore = this.createBackStore(this.schema, options);
        this.global.registerService(Service.BACK_STORE, backStore);
        const indexStore = new MemoryIndexStore();
        this.global.registerService(Service.INDEX_STORE, indexStore);
        const onUpgrade = options ? options.onUpgrade : undefined;
        return backStore
            .init(onUpgrade)
            .then(() => {
            this.global.registerService(Service.QUERY_ENGINE, new DefaultQueryEngine(this.global));
            this.runner = new Runner();
            this.global.registerService(Service.RUNNER, this.runner);
            this.global.registerService(Service.OBSERVER_REGISTRY, new ObserverRegistry());
            return indexStore.init(this.schema);
        })
            .then(() => {
            if (this.observeExternalChanges) {
                const externalChangeObserver = new ExternalChangeObserver(this.global);
                externalChangeObserver.startObserving();
            }
            if (options && options['enableInspector'] && window) {
                window.top['#lfInspect'] = Inspector.inspect;
                window.top['#lfRowId'] = Row.getNextId;
            }
            const prefetcher = new Prefetcher(this.global);
            return prefetcher.init(this.schema);
        })
            .then(() => {
            this.isActive = true;
            return this;
        });
    }
    getGlobal() {
        return this.global;
    }
    getSchema() {
        return this.schema;
    }
    select(...columns) {
        this.checkActive();
        return new SelectBuilder(this.global, columns);
    }
    insert() {
        this.checkActive();
        return new InsertBuilder(this.global);
    }
    insertOrReplace() {
        this.checkActive();
        return new InsertBuilder(this.global, true);
    }
    update(table) {
        this.checkActive();
        return new UpdateBuilder(this.global, table);
    }
    delete() {
        this.checkActive();
        return new DeleteBuilder(this.global);
    }
    observe(builder, callback) {
        this.checkActive();
        const observerRegistry = this.global.getService(Service.OBSERVER_REGISTRY);
        observerRegistry.addObserver(builder, callback);
    }
    unobserve(builder, callback) {
        this.checkActive();
        const observerRegistry = this.global.getService(Service.OBSERVER_REGISTRY);
        observerRegistry.removeObserver(builder, callback);
    }
    createTransaction(type) {
        this.checkActive();
        return new RuntimeTransaction(this.global);
    }
    close() {
        try {
            const backStore = this.global.getService(Service.BACK_STORE);
            backStore.close();
        }
        catch (e) {
        }
        this.global.clear();
        this.isActive = false;
    }
    export() {
        this.checkActive();
        const task = new ExportTask(this.global);
        return this.runner.scheduleTask(task).then(results => {
            return results[0].getPayloads()[0];
        });
    }
    import(d) {
        const data = d;
        this.checkActive();
        const task = new ImportTask(this.global, data);
        return this.runner.scheduleTask(task);
    }
    isOpen() {
        return this.isActive;
    }
    checkActive() {
        if (!this.isActive) {
            throw new Exception(ErrorCode.CONNECTION_CLOSED);
        }
    }
    createBackStore(schema, options) {
        let backStore;
        if (Global.get().getOptions().memoryOnly) {
            backStore = new Memory(schema);
            return backStore;
        }
        let dataStoreType;
        if (options === undefined || options.storeType === undefined) {
            const capability = Capability.get();
            dataStoreType = capability.indexedDb
                ? DataStoreType.INDEXED_DB
                : capability.webSql
                    ? DataStoreType.WEB_SQL
                    : DataStoreType.MEMORY;
        }
        else {
            dataStoreType = options.storeType;
        }
        switch (dataStoreType) {
            case DataStoreType.INDEXED_DB:
                backStore = new IndexedDB(this.global, schema);
                break;
            case DataStoreType.MEMORY:
                backStore = new Memory(schema);
                break;
            case DataStoreType.OBSERVABLE_STORE:
                backStore = new ObservableStore(schema);
                break;
            case DataStoreType.WEB_SQL:
                backStore = new WebSql(this.global, schema, options ? options.websqlDbSize : undefined);
                break;
            default:
                throw new Exception(ErrorCode.NOT_SUPPORTED);
        }
        return backStore;
    }
}
class ColumnImpl {
    constructor(table, name, unique, nullable, type, alias) {
        this.table = table;
        this.name = name;
        this.unique = unique;
        this.nullable = nullable;
        this.type = type;
        this.alias = alias || null;
        this.indices = [];
        this.index = undefined;
    }
    getName() {
        return this.name;
    }
    getNormalizedName() {
        return `${this.table.getEffectiveName()}.${this.name}`;
    }
    toString() {
        return this.getNormalizedName();
    }
    getTable() {
        return this.table;
    }
    getType() {
        return this.type;
    }
    getAlias() {
        return this.alias;
    }
    isNullable() {
        return this.nullable;
    }
    isUnique() {
        return this.unique;
    }
    getIndices() {
        this.table.getIndices().forEach(index => {
            const colNames = index.columns.map(col => col.schema.getName());
            if (colNames.indexOf(this.name) !== -1) {
                this.indices.push(index);
            }
        });
        return this.indices;
    }
    getIndex() {
        if (this.index === undefined) {
            const indices = this.getIndices().filter(indexSchema => {
                if (indexSchema.columns.length !== 1) {
                    return false;
                }
                return indexSchema.columns[0].schema.getName() === this.name;
            });
            this.index =
                indices.length > 0 ? indices[0] : null;
        }
        return this.index;
    }
    eq(operand) {
        return createPredicate(this, operand, EvalType.EQ);
    }
    neq(operand) {
        return createPredicate(this, operand, EvalType.NEQ);
    }
    lt(operand) {
        return createPredicate(this, operand, EvalType.LT);
    }
    lte(operand) {
        return createPredicate(this, operand, EvalType.LTE);
    }
    gt(operand) {
        return createPredicate(this, operand, EvalType.GT);
    }
    gte(operand) {
        return createPredicate(this, operand, EvalType.GTE);
    }
    match(operand) {
        return createPredicate(this, operand, EvalType.MATCH);
    }
    between(from, to) {
        return createPredicate(this, [from, to], EvalType.BETWEEN);
    }
    in(values) {
        return createPredicate(this, values, EvalType.IN);
    }
    isNull() {
        return this.eq(null);
    }
    isNotNull() {
        return this.neq(null);
    }
    as(name) {
        return new ColumnImpl(this.table, this.name, this.unique, this.nullable, this.type, name);
    }
}
class RowImpl extends Row {
    constructor(functionMap, columns, indices, id, payload) {
        super(id, payload);
        this.functionMap = functionMap;
        this.columns = columns;
        this.payload_ = payload || this.defaultPayload();
    }
    defaultPayload() {
        if (this.columns === undefined) {
            return null;
        }
        const obj = {};
        this.columns.forEach(col => {
            obj[col.getName()] = col.isNullable()
                ? null
                : DEFAULT_VALUES.get(col.getType());
        });
        return obj;
    }
    toDbPayload() {
        const obj = {};
        this.columns.forEach(col => {
            const key = col.getName();
            const type = col.getType();
            let value = this.payload()[key];
            if (type === Type.ARRAY_BUFFER) {
                value = value ? Row.binToHex(value) : null;
            }
            else if (type === Type.DATE_TIME) {
                value = value ? value.getTime() : null;
            }
            else if (type === Type.OBJECT) {
                value = value || null;
            }
            obj[key] = value;
        });
        return obj;
    }
    keyOfIndex(indexName) {
        const key = super.keyOfIndex(indexName);
        if (key === null) {
            const fn = this.functionMap.get(indexName);
            if (fn) {
                return fn(this.payload());
            }
        }
        return key;
    }
}
class TableImpl {
    constructor(_name, cols, _indices, _usePersistentIndex, alias) {
        this._name = _name;
        this._indices = _indices;
        this._usePersistentIndex = _usePersistentIndex;
        this._columns = [];
        cols.forEach(col => {
            const colSchema = new ColumnImpl(this, col.name, col.unique, col.nullable, col.type);
            this[col.name] = colSchema;
            this._columns.push(colSchema);
        }, this);
        this._referencingFK = null;
        this._functionMap = null;
        this._constraint = null;
        this._evalRegistry = EvalRegistry.get();
        this._alias = alias ? alias : null;
    }
    getName() {
        return this._name;
    }
    getAlias() {
        return this._alias;
    }
    getEffectiveName() {
        return this._alias || this._name;
    }
    getIndices() {
        return this._indices || TableImpl.EMPTY_INDICES;
    }
    getColumns() {
        return this._columns;
    }
    getConstraint() {
        return this._constraint;
    }
    persistentIndex() {
        return this._usePersistentIndex;
    }
    as(name) {
        const colDef = this._columns.map(col => {
            return {
                name: col.getName(),
                nullable: col.isNullable(),
                type: col.getType(),
                unique: col.isUnique(),
            };
        });
        const clone = new TableImpl(this._name, colDef, this._indices, this._usePersistentIndex, name);
        clone._referencingFK = this._referencingFK;
        clone._constraint = this._constraint;
        clone._alias = name;
        return clone;
    }
    col(name) {
        return this[name];
    }
    getRowIdIndexName() {
        return `${this._name}.${TableImpl.ROW_ID_INDEX_PATTERN}`;
    }
    createRow(value) {
        return new RowImpl(this._functionMap, this._columns, this._indices, Row.getNextId(), value);
    }
    deserializeRow(dbRecord) {
        const obj = {};
        this._columns.forEach(col => {
            const key = col.getName();
            const type = col.getType();
            let value = dbRecord.value[key];
            if (type === Type.ARRAY_BUFFER) {
                value = Row.hexToBin(value);
            }
            else if (type === Type.DATE_TIME) {
                value = value !== null ? new Date(value) : null;
            }
            obj[key] = value;
        });
        return new RowImpl(this._functionMap, this._columns, this._indices, dbRecord.id, obj);
    }
    constructIndices(pkName, indices, uniqueIndices, nullable, fkSpecs) {
        if (indices.size === 0) {
            this._constraint = new Constraint(null, [], []);
            return;
        }
        const columnMap = new Map();
        this._columns.forEach(col => columnMap.set(col.getName(), col));
        this._indices = Array.from(indices.keys()).map(indexName => {
            return new IndexImpl(this._name, indexName, uniqueIndices.has(indexName), this.generateIndexedColumns(indices, columnMap, indexName));
        });
        this._functionMap = new Map();
        this._indices.forEach(index => this._functionMap.set(index.getNormalizedName(), this.getKeyOfIndexFn(columnMap, index)));
        const pk = pkName === null
            ? null
            : new IndexImpl(this._name, pkName, true, this.generateIndexedColumns(indices, columnMap, pkName));
        const notNullable = this._columns.filter(col => !nullable.has(col.getName()));
        this._constraint = new Constraint(pk, notNullable, fkSpecs);
    }
    generateIndexedColumns(indices, columnMap, indexName) {
        const index = indices.get(indexName);
        if (index) {
            return index.map(indexedColumn => {
                return {
                    autoIncrement: indexedColumn.autoIncrement,
                    order: indexedColumn.order,
                    schema: columnMap.get(indexedColumn.name),
                };
            });
        }
        throw new Exception(ErrorCode.ASSERTION);
    }
    getSingleKeyFn(columnMap, column) {
        const col = columnMap.get(column.getName());
        if (col) {
            const colType = col.getType();
            const keyOfIndexFn = this._evalRegistry.getKeyOfIndexEvaluator(colType);
            return (payload) => keyOfIndexFn(payload[column.getName()]);
        }
        throw new Exception(ErrorCode.ASSERTION);
    }
    getMultiKeyFn(columnMap, columns) {
        const getSingleKeyFunctions = columns.map(col => this.getSingleKeyFn(columnMap, col.schema));
        return (payload) => getSingleKeyFunctions.map(fn => fn(payload));
    }
    getKeyOfIndexFn(columnMap, index) {
        return index.columns.length === 1
            ? this.getSingleKeyFn(columnMap, index.columns[0].schema)
            : this.getMultiKeyFn(columnMap, index.columns);
    }
}
TableImpl.ROW_ID_INDEX_PATTERN = '#';
TableImpl.EMPTY_INDICES = [];
export class TableBuilder {
    static toPascal(name) {
        return name[0].toUpperCase() + name.substring(1);
    }
    constructor(tableName) {
        this.checkNamingRules(tableName);
        this.name = tableName;
        this.columns = new Map();
        this.uniqueColumns = new Set();
        this.uniqueIndices = new Set();
        this.nullable = new Set();
        this.pkName = null;
        this.indices = new Map();
        this.persistIndex = false;
        this.fkSpecs = [];
    }
    addColumn(name, type) {
        this.checkNamingRules(name);
        this.checkNameConflicts(name);
        this.columns.set(name, type);
        if (TableBuilder.NULLABLE_TYPES_BY_DEFAULT.has(type)) {
            this.addNullable([name]);
        }
        return this;
    }
    addPrimaryKey(columns, autoInc = false) {
        this.pkName = 'pk' + TableBuilder.toPascal(this.name);
        this.checkNamingRules(this.pkName);
        this.checkNameConflicts(this.pkName);
        const cols = this.normalizeColumns(columns, true, undefined, autoInc);
        this.checkPrimaryKey(cols);
        if (cols.length === 1) {
            this.uniqueColumns.add(cols[0].name);
        }
        this.uniqueIndices.add(this.pkName);
        this.indices.set(this.pkName, cols);
        return this;
    }
    addForeignKey(name, rawSpec) {
        this.checkNamingRules(name);
        this.checkNameConflicts(name);
        if (rawSpec.action === undefined) {
            rawSpec.action = ConstraintAction.RESTRICT;
        }
        if (rawSpec.timing === undefined) {
            rawSpec.timing = ConstraintTiming.IMMEDIATE;
        }
        const spec = new ForeignKeySpec(rawSpec, this.name, name);
        if (spec.action === ConstraintAction.CASCADE &&
            spec.timing === ConstraintTiming.DEFERRABLE) {
            throw new Exception(ErrorCode.IMMEDIATE_EVAL_ONLY);
        }
        if (!this.columns.has(spec.childColumn)) {
            throw new Exception(ErrorCode.INVALID_FK_REF, `${this.name}.${name}`);
        }
        this.fkSpecs.push(spec);
        this.addIndex(name, [spec.childColumn], this.uniqueColumns.has(spec.childColumn));
        return this;
    }
    addUnique(name, columns) {
        this.checkNamingRules(name);
        this.checkNameConflicts(name);
        const cols = this.normalizeColumns(columns, true);
        if (cols.length === 1) {
            this.uniqueColumns.add(cols[0].name);
            this.markFkIndexForColumnUnique(cols[0].name);
        }
        this.indices.set(name, cols);
        this.uniqueIndices.add(name);
        return this;
    }
    addNullable(columns) {
        this.normalizeColumns(columns, false).forEach(col => this.nullable.add(col.name));
        return this;
    }
    addIndex(name, columns, unique = false, order = Order.ASC) {
        this.checkNamingRules(name);
        this.checkNameConflicts(name);
        this.indices.set(name, this.normalizeColumns(columns, true, order));
        if (unique) {
            this.uniqueIndices.add(name);
        }
        return this;
    }
    persistentIndex(value) {
        this.persistIndex = value;
    }
    getSchema() {
        this.checkPrimaryKeyNotForeignKey();
        this.checkPrimaryKeyDuplicateIndex();
        this.checkPrimaryKeyNotNullable();
        const columns = Array.from(this.columns.keys()).map(colName => {
            return {
                name: colName,
                nullable: this.nullable.has(colName) || false,
                type: this.columns.get(colName),
                unique: this.uniqueColumns.has(colName) || false,
            };
        });
        const table = new TableImpl(this.name, columns, null, this.persistIndex);
        table.constructIndices(this.pkName, this.indices, this.uniqueIndices, this.nullable, this.fkSpecs);
        return table;
    }
    getFkSpecs() {
        return this.fkSpecs;
    }
    checkNamingRules(name) {
        if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
            throw new Exception(ErrorCode.INVALID_NAME, name);
        }
    }
    checkNameConflicts(name) {
        if (name === this.name) {
            throw new Exception(ErrorCode.DUPLICATE_NAME, name);
        }
        if (this.columns.has(name) ||
            this.indices.has(name) ||
            this.uniqueIndices.has(name)) {
            throw new Exception(ErrorCode.NAME_IN_USE, `${this.name}.${name}`);
        }
    }
    checkPrimaryKey(columns) {
        let hasAutoIncrement = false;
        columns.forEach(column => {
            const columnType = this.columns.get(column.name);
            hasAutoIncrement =
                hasAutoIncrement || column.autoIncrement;
            if (column.autoIncrement && columnType !== Type.INTEGER) {
                throw new Exception(ErrorCode.INVALID_AUTO_KEY_TYPE);
            }
        });
        if (hasAutoIncrement && columns.length > 1) {
            throw new Exception(ErrorCode.INVALID_AUTO_KEY_COLUMN);
        }
    }
    checkPrimaryKeyNotForeignKey() {
        if (this.pkName === null) {
            return;
        }
        const index = this.indices.get(this.pkName);
        if (index) {
            const pkColumns = index.map(column => column.name);
            let fkSpecIndex = 0;
            const conflict = this.fkSpecs.some((fkSpec, i) => {
                fkSpecIndex = i;
                return pkColumns.indexOf(fkSpec.childColumn) !== -1;
            });
            if (conflict) {
                throw new Exception(ErrorCode.PK_CANT_BE_FK, this.fkSpecs[fkSpecIndex].name);
            }
        }
    }
    checkPrimaryKeyDuplicateIndex() {
        if (this.pkName === null) {
            return;
        }
        const index = this.indices.get(this.pkName);
        if (index) {
            const extractName = (column) => column.name;
            const pkColumnsJson = JSON.stringify(index.map(extractName));
            this.indices.forEach((indexedColumnSpecs, indexName) => {
                if (indexName === this.pkName) {
                    return;
                }
                if (JSON.stringify(indexedColumnSpecs.map(extractName)) === pkColumnsJson) {
                    throw new Exception(ErrorCode.DUPLICATE_PK, `${this.name}.${indexName}`);
                }
            });
        }
    }
    checkPrimaryKeyNotNullable() {
        if (this.pkName === null) {
            return;
        }
        const index = this.indices.get(this.pkName);
        if (index) {
            index.forEach(indexedColumnSpec => {
                if (this.nullable.has(indexedColumnSpec.name)) {
                    throw new Exception(ErrorCode.NULLABLE_PK, `${this.name}.${indexedColumnSpec.name}`);
                }
            });
        }
    }
    normalizeColumns(columns, checkIndexable, sortOrder = Order.ASC, autoInc = false) {
        let normalized = null;
        if (typeof columns[0] === 'string') {
            const array = columns;
            normalized = array.map(col => {
                return {
                    autoIncrement: autoInc || false,
                    name: col,
                    order: sortOrder,
                };
            });
        }
        else {
            normalized = columns;
        }
        normalized.forEach(col => {
            if (!this.columns.has(col.name)) {
                throw new Exception(ErrorCode.COLUMN_NOT_FOUND, this.name, col.name);
            }
            if (checkIndexable) {
                const type = this.columns.get(col.name);
                if (type === Type.ARRAY_BUFFER || type === Type.OBJECT) {
                    throw new Exception(ErrorCode.COLUMN_NOT_INDEXABLE, this.name, col.name);
                }
            }
        });
        return normalized;
    }
    markFkIndexForColumnUnique(column) {
        this.fkSpecs.forEach(fkSpec => {
            if (fkSpec.childColumn === column) {
                this.uniqueIndices.add(fkSpec.name.split('.')[1]);
            }
        });
    }
}
TableBuilder.NULLABLE_TYPES_BY_DEFAULT = new Set([
    Type.ARRAY_BUFFER,
    Type.OBJECT,
]);
class GraphNode {
    constructor(name) {
        this.name = name;
        this.visited = false;
        this.onStack = false;
        this.edges = new Set();
    }
}
class SchemaBuilder {
    constructor(dbName, dbVersion) {
        this.schema = new DatabaseSchemaImpl(dbName, dbVersion);
        this.tableBuilders = new Map();
        this.finalized = false;
        this.db = null;
        this.connectInProgress = false;
    }
    getSchema() {
        if (!this.finalized) {
            this.finalize();
        }
        return this.schema;
    }
    getGlobal() {
        const namespaceGlobalId = new ServiceId(`ns_${this.schema.name()}`);
        const global = Global.get();
        let namespacedGlobal;
        if (!global.isRegistered(namespaceGlobalId)) {
            namespacedGlobal = new Global();
            global.registerService(namespaceGlobalId, namespacedGlobal);
        }
        else {
            namespacedGlobal = global.getService(namespaceGlobalId);
        }
        return namespacedGlobal;
    }
    connect(options) {
        if (this.connectInProgress || (this.db !== null && this.db.isOpen())) {
            throw new Exception(ErrorCode.ALREADY_CONNECTED);
        }
        this.connectInProgress = true;
        if (this.db === null) {
            const global = this.getGlobal();
            if (!global.isRegistered(Service.SCHEMA)) {
                global.registerService(Service.SCHEMA, this.getSchema());
            }
            this.db = new RuntimeDatabase(global);
        }
        return this.db.init(options).then(db => {
            this.connectInProgress = false;
            return db;
        }, e => {
            this.connectInProgress = false;
            this.db.close();
            throw e;
        });
    }
    createTable(tableName) {
        if (this.tableBuilders.has(tableName)) {
            throw new Exception(ErrorCode.NAME_IN_USE, tableName);
        }
        else if (this.finalized) {
            throw new Exception(ErrorCode.SCHEMA_FINALIZED);
        }
        this.tableBuilders.set(tableName, new TableBuilder(tableName));
        const ret = this.tableBuilders.get(tableName);
        if (!ret) {
            throw new Exception(ErrorCode.ASSERTION, 'Builder.createTable');
        }
        return ret;
    }
    setPragma(pragma) {
        if (this.finalized) {
            throw new Exception(ErrorCode.SCHEMA_FINALIZED);
        }
        this.schema._pragma = pragma;
        return this;
    }
    checkFkCycle() {
        const nodeMap = new Map();
        this.schema.tables().forEach(table => {
            nodeMap.set(table.getName(), new GraphNode(table.getName()));
        }, this);
        this.tableBuilders.forEach((builder, tableName) => {
            builder.getFkSpecs().forEach(spec => {
                const parentNode = nodeMap.get(spec.parentTable);
                if (parentNode) {
                    parentNode.edges.add(tableName);
                }
            });
        });
        Array.from(nodeMap.values()).forEach(graphNode => this.checkCycleUtil(graphNode, nodeMap));
    }
    checkForeignKeyValidity(builder) {
        builder.getFkSpecs().forEach(specs => {
            const parentTableName = specs.parentTable;
            const table = this.tableBuilders.get(parentTableName);
            if (!table) {
                throw new Exception(ErrorCode.INVALID_FK_TABLE);
            }
            const parentSchema = table.getSchema();
            const parentColName = specs.parentColumn;
            if (!Object.prototype.hasOwnProperty.call(parentSchema, parentColName)) {
                throw new Exception(ErrorCode.INVALID_FK_COLUMN);
            }
            const localSchema = builder.getSchema();
            const localColName = specs.childColumn;
            if (localSchema[localColName].getType() !==
                parentSchema[parentColName].getType()) {
                throw new Exception(ErrorCode.INVALID_FK_COLUMN_TYPE, specs.name);
            }
            if (!parentSchema[parentColName].isUnique()) {
                throw new Exception(ErrorCode.FK_COLUMN_NONUNIQUE, specs.name);
            }
        }, this);
    }
    checkForeignKeyChain(builder) {
        const fkSpecArray = builder.getFkSpecs();
        fkSpecArray.forEach(specs => {
            const parentBuilder = this.tableBuilders.get(specs.parentTable);
            if (parentBuilder) {
                parentBuilder.getFkSpecs().forEach(parentSpecs => {
                    if (parentSpecs.childColumn === specs.parentColumn) {
                        throw new Exception(ErrorCode.FK_COLUMN_IN_USE, specs.name);
                    }
                }, this);
            }
        }, this);
    }
    finalize() {
        if (!this.finalized) {
            this.tableBuilders.forEach(builder => {
                this.checkForeignKeyValidity(builder);
                this.schema.setTable(builder.getSchema());
            });
            Array.from(this.tableBuilders.values()).forEach(this.checkForeignKeyChain, this);
            this.checkFkCycle();
            this.tableBuilders.clear();
            this.finalized = true;
        }
    }
    checkCycleUtil(graphNode, nodeMap) {
        if (!graphNode.visited) {
            graphNode.visited = true;
            graphNode.onStack = true;
            graphNode.edges.forEach(edge => {
                const childNode = nodeMap.get(edge);
                if (childNode) {
                    if (!childNode.visited) {
                        this.checkCycleUtil(childNode, nodeMap);
                    }
                    else if (childNode.onStack) {
                        if (graphNode !== childNode) {
                            throw new Exception(ErrorCode.FK_LOOP);
                        }
                    }
                }
            }, this);
        }
        graphNode.onStack = false;
    }
}
export class schema {
    static create(name, version) {
        return new SchemaBuilder(name, version);
    }
}

//# sourceMappingURL=lf.js.map
