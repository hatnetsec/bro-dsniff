// Generated by binpac_quickstart

#ifndef ANALYZER_PROTOCOL_IMAP_IMAP_H
#define ANALYZER_PROTOCOL_IMAP_IMAP_H

#include "events.bif.h"


#include "analyzer/protocol/tcp/TCP.h"

#include "imap_pac.h"

namespace analyzer { namespace IMAP {

class IMAP_Analyzer

: public tcp::TCP_ApplicationAnalyzer {

public:
	IMAP_Analyzer(Connection* conn);
	virtual ~IMAP_Analyzer();

	// Overriden from Analyzer.
	virtual void Done();
	
	virtual void DeliverStream(int len, const u_char* data, bool orig);
	virtual void Undelivered(uint64 seq, int len, bool orig);

	// Overriden from tcp::TCP_ApplicationAnalyzer.
	virtual void EndpointEOF(bool is_orig);
	

	static analyzer::Analyzer* InstantiateAnalyzer(Connection* conn)
		{ return new IMAP_Analyzer(conn); }

protected:
	binpac::IMAP::IMAP_Conn* interp;
	
	bool had_gap;
	
};

} } // namespace analyzer::* 

#endif